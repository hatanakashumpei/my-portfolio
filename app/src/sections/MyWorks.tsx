import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Container, Typography, Box } from '@mui/material';
import SpeakerDeckSlide from '../components/SpeakerDeckSlide';

const GroupBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.background.paper,
}));

const StyledTypography = styled(Typography)(() => ({
    overflowWrap: 'break-word', // 長い文字列の折り返しを許容
    wordBreak: 'break-word',    // 単語の途中で改行を許容
    lineHeight: 1.6,            // 読みやすい行間を設定
}));

const MyWorks: React.FC = () => {
    const slides = [
        {
            id: '1212fbb2321a4c76979abc4e0239780a',
            title: 'M2研究',
            description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        },
        {
            id: '4bd9b59980524c159be82fa822b5bc1c',
            title: 'M1研究',
            description: 'yyy',
        },
        {
            id: '770fb94599bb4cdd9d2c5a5d1fe90aa5',
            title: 'M2研究',
            description: 'zzz',
        },
    ];

    return (
        <Container sx={{ paddingY: '40px' }}>
            <Typography variant="h4" gutterBottom>
                MyWorks
            </Typography>
            <Box sx={{ width: '100%' }}>
                {slides.map((slide, index) => (
                    <GroupBox key={index}>
                        <Grid container spacing={2} alignItems="center">
                            {/* 偶数番目の要素は左右反転 */}
                            {index % 2 === 0 ? (
                                <>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <SpeakerDeckSlide id={slide.id} />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <StyledTypography variant="h6" gutterBottom>
                                            {slide.title}
                                        </StyledTypography>
                                        <StyledTypography variant="body1">
                                            {slide.description}
                                        </StyledTypography>
                                    </Grid>
                                </>
                            ) : (
                                <>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <StyledTypography variant="h6" gutterBottom>
                                            {slide.title}
                                        </StyledTypography>
                                        <StyledTypography variant="body1">
                                            {slide.description}
                                        </StyledTypography>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <SpeakerDeckSlide id={slide.id} />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </GroupBox>
                ))}
            </Box>
        </Container>
    );
};

export default MyWorks;