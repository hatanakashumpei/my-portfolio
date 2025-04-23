import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Portfolio: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Portfolio
        </Typography>
        <Typography variant="body1">
          - Weather App: A React-based weather forecasting application.<br />
          - Dockerized Blog Platform: A blogging platform showcasing efficient containerization.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Portfolio;