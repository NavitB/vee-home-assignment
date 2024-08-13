import { SxProps, Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const cardStyle: SxProps<Theme> = {
    flex: '1 0 auto', // Allows the card to grow to fill the space and not shrink below its minimum content size
    height: 'auto',
    margin: 2,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    boxShadow: '0 2px 4px rgba(0,0,0,0.12)',
    maxWidth: 320,
  };
  
  

export const avatarStyle: SxProps<Theme> = {
  bgcolor: red[500], // Red background for avatar
};

export const thumbIconsStyle: SxProps<Theme> = {
  color: 'grey', // Icons colored to match the design
};

export const titleStyle: SxProps<Theme> = {
    fontSize: '1.5rem', // Adjust title font size as needed
    fontWeight: 'bold', // Example style
}

export const subheaderStyle: SxProps<Theme> = {
    fontSize: '1.2rem', // Adjust subheader font size as needed
    color: 'gray', // Example style
}

export const boxStyle: SxProps<Theme> = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: 2,
  bgcolor: '#F2F2F2', // Light grey background
  m: 1,
  borderRadius: 1,
};

export const tagStyle: SxProps<Theme> = {
  bgcolor: '#E0E0E0', // Grey background for tags
  color: '#333', // Darker text for better contrast
  border: 'none',
  borderRadius: 16,
  px: 2,
  py: 0.5,
  m: 0.5,
  typography: 'caption' // Assuming smaller font size for tags
};

export const areaOfFundingContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: 0.5,
  m:2,
};
