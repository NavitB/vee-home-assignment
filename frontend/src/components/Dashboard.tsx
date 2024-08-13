import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import GrantsTable from './GrantsTable';
import NewMatches from './NewMatches';
// import Modal from 'react-modal';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import {
    dashboardContainerStyle,
    sectionHeaderStyle,
    modalStyle,
    modalBoxStyle,
    formStyle,
    feedbackTextStyle,
    submitButtonStyle
  } from '../styles/dashboardStyles'; 

// Modal.setAppElement('#root');

const GET_GRANTS_BY_STATUS = gql`
  query GetGrantsByStatus($userId: ID!, $status: Status!) {
    grantsByStatus(userId: $userId, status: $status) {
      grant {
        id
        name
        foundation
        location
        amount
        deadline
        area
        logo
      }
      status  
      matchDate  
    }
  }
`;

const CHANGE_GRANT_STATUS = gql`
  mutation ChangeGrantStatus($userId: ID!, $grantId: ID!, $status: Status!, $feedback: String!) {
    changeGrantStatus(userId: $userId, grantId: $grantId, status: $status, feedback: $feedback) {
      id
      name
      foundation
      location
      amount
      deadline
      area
      logo
    }
  }
`;

interface DashboardProps {
  userId: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userId }) => {
  const { data: newGrantsData, refetch: refetchNew } = useQuery(GET_GRANTS_BY_STATUS, {
    variables: { userId, status: 'NEW' },
  });

  const { data: likedGrantsData, refetch: refetchLiked } = useQuery(GET_GRANTS_BY_STATUS, {
    variables: { userId, status: 'LIKED' },
  });


  const [changeGrantStatus] = useMutation(CHANGE_GRANT_STATUS, {
    onCompleted: () => {
      refetchNew();
      refetchLiked();
    },
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedGrant, setSelectedGrant] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleLike = (grantId: string) => {
    console.log("Grant ID liked:", grantId);
    setSelectedGrant(grantId);
    setSelectedStatus('LIKED');
    setModalIsOpen(true);
  };

  const handleDislike = (grantId: string) => {
    console.log("Grant ID disliked:", grantId);
    setSelectedGrant(grantId);
    setSelectedStatus('DISLIKED');
    setModalIsOpen(true);
  };

  const submitFeedback = (feedback: string) => {
    if (selectedGrant) {
      setModalIsOpen(false);
      changeGrantStatus({ variables: { userId, grantId: selectedGrant, status: selectedStatus, feedback } });
    }
  };

  return (
    <div style={dashboardContainerStyle}>
      <h1 style={sectionHeaderStyle}>New Matches</h1>
      <NewMatches grants={newGrantsData?.grantsByStatus || []} onLike={handleLike} onDislike={handleDislike} />

      <h1 style={sectionHeaderStyle}>All Grant Opportunities</h1>
      <GrantsTable grants={likedGrantsData?.grantsByStatus || []} />

      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <Box sx={modalBoxStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Feedback
          </Typography>
          <Box component="form" onSubmit={(e) => {
            e.preventDefault();
            submitFeedback((e.target as any).feedback.value);
            }} sx={{ mt: 1 }}>
          <TextField
              multiline
              rows={4}
              defaultValue=""
              variant="outlined"
              fullWidth
              required
              name="feedback"
              sx={feedbackTextStyle}
            />
            <Button type="submit" sx={submitButtonStyle}>Submit</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Dashboard;
