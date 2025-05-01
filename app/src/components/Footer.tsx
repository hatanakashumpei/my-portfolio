import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        maxWidth: '100%',
        textAlign: 'center',
        paddingY: '20px',
        marginTop: '40px',
        backgroundColor: '#1976d2',
        color: 'white',
        minHeight: '60px',
        display: 'flex', // Flexbox for centering
        alignItems: 'center', // Vertically center
        justifyContent: 'center', // Horizontally center
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Shumpei, Hatanaka | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;