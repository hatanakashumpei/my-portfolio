import React from 'react';
import { Container, Typography, Chip, Box, Paper } from '@mui/material';

const Skills: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <Chip label="JavaScript / TypeScript" color="primary" />
          <Chip label="React / Next.js" color="secondary" />
          <Chip label="Docker / Docker Compose" color="success" />
          <Chip label="Node.js" color="info" />
          <Chip label="Git / CI-CD Pipelines" color="warning" />
        </Box>
      </Paper>
    </Container>
  );
};

export default Skills;