import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Publications: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Publications
        </Typography>
        <Typography variant="body1">
          - "Efficient Web Development with Vite" - Web Dev Journal, 2024<br />
          - "Containerization Best Practices with Docker" - DevBlog Weekly, 2023
        </Typography>
      </Paper>
    </Container>
  );
};

export default Publications;