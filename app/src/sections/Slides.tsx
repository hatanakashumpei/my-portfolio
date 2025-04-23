import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Slides: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Side Projects & Hobbies
        </Typography>
        <Typography variant="body1">
          - Built a weather forecasting app using OpenWeatherMap API and React.<br />
          - Member of a local Japanese culture club, sharing traditions and language tips.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Slides;