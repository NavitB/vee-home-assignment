import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const tableContainerStyle: SxProps<Theme> = {
  margin: 'auto',
  maxWidth: 1200,
  boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',  // Soft shadow around the table
  borderRadius: '8px',  // Rounded corners for the container
};

export const tableHeadStyle: SxProps<Theme> = {
  backgroundColor: '#f5f5f5',  // Light grey background for the table header
};

export const tableCellHeadStyle: SxProps<Theme> = {
  fontWeight: 'bold',  // Make header text bold
  color: '#333',       // Dark grey color for text
  borderBottom: '2px solid #e0e0e0'  // Solid line under the header for separation
};

export const tableRowStyle: SxProps<Theme> = {
  '&:nth-of-type(odd)': {
    backgroundColor: '#fafafa',  // Zebra striping for rows
  },
  '&:hover': {
    backgroundColor: '#f0f0f0',  // Slightly darker on hover
  },
  '&:last-child td, &:last-child th': { border: 0 }
};

export const tableCellStyle: SxProps<Theme> = {
  fontSize: '0.875rem',  // Slightly smaller font size for table content
};
