import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form style={{ marginTop: '20px' }}>
        <TextField label="Your Name" fullWidth margin="normal" />
        <TextField label="Your Email" fullWidth margin="normal" />
        <TextField
          label="Your Message"
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '10px' }}>
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;