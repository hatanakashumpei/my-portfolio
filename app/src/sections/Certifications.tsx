import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Certifications: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Certifications
        </Typography>
        <Typography variant="body1">
          - Certified Kubernetes Administrator (CKA) - 2024<br />
          - React Developer Certification by Meta - 2023<br />
          - Docker Certified Associate - 2022
        </Typography>
      </Paper>
    </Container>
  );
};

export default Certifications;