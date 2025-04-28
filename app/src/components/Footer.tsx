import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                maxWidth: '100%',
                textAlign: 'center',
                paddingY: '20px',
                marginTop: '40px',
                backgroundColor: '#1976d2',
                color: 'white',
                minHeight: '60px', // フッターが極端に小さくならないようにする
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} 畑中 | All Rights Reserved
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                <Link href="https://github.com/your-github" color="inherit" sx={{ mx: 1 }}>
                    GitHub
                </Link>
                <Link href="https://linkedin.com/in/your-profile" color="inherit" sx={{ mx: 1 }}>
                    LinkedIn
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;