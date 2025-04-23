import React from 'react';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to My Portfolio!
      </Typography>
      <Typography variant="body1">
        Here you'll find my biography, skills, and professional journey. Let's connect!
      </Typography>
    </Container>
  );
};

export default Home;