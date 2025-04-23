import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Biography: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Biography
        </Typography>
        <Typography variant="body1">
          Hi, I'm 畑中! A software developer specializing in modern web development tools like Vite, React, and Docker.
          With a meticulous and efficient workflow, I enjoy solving complex technical challenges and building functional, user-friendly applications.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Biography;