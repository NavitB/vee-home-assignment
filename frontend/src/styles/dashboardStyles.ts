import { SxProps, Theme } from '@mui/material/styles';

export const dashboardContainerStyle = {
  padding: '24px',
  backgroundColor: '#f9f9f9', // Light gray background
  minHeight: '100vh', // Full height
};

export const sectionHeaderStyle = {
  fontSize: '1.5rem',
  color: '#333', // Dark text for better readability
  marginBottom: '20px',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Robust font choice
};

export const cardContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  gap: '20px',
  marginBottom: '40px', // Space between sections
};

export const modalStyle: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: 150,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const modalBoxStyle :SxProps<Theme> = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: 400, 
    height: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
    display: 'flex',
    flex:1,
    flexDirection: 'column', // Ensures vertical alignment of form elements
  };

export const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

export const feedbackTextStyle: SxProps<Theme> = {
  minHeight: '100px', // Minimum height for the textarea
};

export const submitButtonStyle: SxProps<Theme> = {
  backgroundColor: '#007bff', // Bootstrap primary blue
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#0056b3', // Darker blue on hover
  },
};
