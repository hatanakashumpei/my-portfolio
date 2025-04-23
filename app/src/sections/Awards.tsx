import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Awards: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Awards
        </Typography>
        <Typography variant="body1">
          - Best Innovative Developer Award - XYZ Tech Conference, 2024<br />
          - First Place in Open Source Contribution Challenge - DevGlobal, 2023
        </Typography>
      </Paper>
    </Container>
  );
};

export default Awards;