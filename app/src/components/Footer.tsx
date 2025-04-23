import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Container sx={{ textAlign: 'center', paddingY: '20px', marginTop: '40px', backgroundColor: '#1976d2', color: 'white' }}>
            <Typography variant="body2">
                © {new Date().getFullYear()} 畑中 | All Rights Reserved
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                <Link href="https://github.com/your-github" color="inherit" sx={{ mx: 1 }}>GitHub</Link>
                <Link href="https://linkedin.com/in/your-profile" color="inherit" sx={{ mx: 1 }}>LinkedIn</Link>
            </Box>
        </Container>
    );
};

export default Footer;