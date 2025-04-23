import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Blog: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body1">
          - "The Power of Docker: Streamlining Development Environments"<br />
          - "Using Vite for Ultra-Fast Build Times"<br />
          - "React Performance Optimization Tips and Tricks"
        </Typography>
      </Paper>
    </Container>
  );
};

export default Blog;