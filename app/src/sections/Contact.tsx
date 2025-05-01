import React from 'react';
import { Container, Typography, Box, Paper, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px', textAlign: 'left' }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'left', gap: '20px', marginTop: '20px' }}>
          {/* メールアドレスアイコン */}
          <IconButton
            color="primary"
            aria-label="email"
            href="mailto:hatanakapeter@gmail.com"
          >
            <EmailIcon fontSize="large" />
          </IconButton>
          {/* GitHubアイコン */}
          <IconButton
            color="primary"
            aria-label="GitHub"
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          {/* LinkedInアイコン */}
          <IconButton
            color="primary"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;