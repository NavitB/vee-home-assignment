import React from 'react';
import { Card, Avatar, CardHeader, IconButton, Typography, CardActions, Box } from '@mui/material';
import { Grant } from '../types/grant';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import {
  cardStyle,
  titleStyle,
  avatarStyle,
  subheaderStyle,
  thumbIconsStyle,
  boxStyle,
  tagStyle,
  areaOfFundingContainerStyle,
} from '../styles/cardStyles';
import { createFormattedDate } from '../helpers';



interface GrantCardProps {
  grant: Grant;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
}

const GrantCard: React.FC<GrantCardProps> = ({ grant, onLike, onDislike }) => {
  return (
    <Card sx={cardStyle}>
      <CardHeader
        avatar={
          grant.logo ? (
            <Avatar src={grant.logo} sx={avatarStyle} />
          ) : (
            <Avatar sx={avatarStyle}>{grant.name[0]}</Avatar>
          )
        }        
        title={grant.name}
        titleTypographyProps={{sx: titleStyle }}
        subheader={grant.foundation}
        subheaderTypographyProps={{sx: subheaderStyle }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <Box sx={boxStyle}>
          <Typography variant="h6">${grant.amount}</Typography>
          <Typography variant="body2">Avg Amount</Typography>
        </Box>
        <Box sx={boxStyle}>
          <Typography variant="h6">{createFormattedDate(grant.deadline)}</Typography>
          <Typography variant="body2">Deadline</Typography>
        </Box>
      </Box>
      <Box sx={areaOfFundingContainerStyle}>
        {grant.area.map((tag, index) => (
          <Box key={index} sx={tagStyle}>
            {tag}
          </Box>
        ))}
      </Box>
      <CardActions disableSpacing>
        <IconButton sx={thumbIconsStyle} onClick={() => onLike(grant.id)}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton sx={thumbIconsStyle} onClick={() => onDislike(grant.id)}>
          <ThumbDownAltIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default GrantCard;
