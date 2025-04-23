import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Experience: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <Typography variant="h6">
          Software Developer at Tech Innovators Inc. (2022 - Present)
        </Typography>
        <Typography variant="body2">
          - Designed and implemented scalable web applications using React and Docker.<br />
          - Reduced build times by 30% using Vite.
        </Typography>
        <Typography variant="h6" sx={{ marginTop: '20px' }}>
          Junior Web Developer at Creative Code Lab (2020 - 2022)
        </Typography>
        <Typography variant="body2">
          - Maintained legacy systems while introducing modern tooling.<br />
          - Improved client satisfaction scores through efficient designs with MUI.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Experience;