import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Container, Typography, Box, Paper } from '@mui/material';
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
            title: 'M2研究：市街地での移動指示文に基づく目標領域予測',
            description: '移動指示文を理解し目標領域のセグメンテーションマスクを生成するタスクである\
            Referring Navigable Regionsタスクを扱い、本研究では、トリモーダルエンコーダ・デコーダモデルとして，\
            言語・画像・セマンティクセグメンテーションマスクの3つのモダリティを扱う\
            Trimodal Navigable Region Segmentation Model（TNRSM）を提案。',
        },
        {
            id: '4bd9b59980524c159be82fa822b5bc1c',
            title: 'M1研究:市街地での移動指示理解タスクにおけるUNITER Regressor による目標位置予測',
            description: '移動指示文を入力としてモビリティが最終的に停止すべき目標位置を予測\
            するための手法を構築。',
        },
        {
            id: '770fb94599bb4cdd9d2c5a5d1fe90aa5',
            title: 'B4研究：生活支援ロボットによる物体配置タスクにおける危険性予約および視覚的説明生成',
            description: '対象物体を指定した場所に配置するphysical reasoningタスクにおいて、衝突確率を\
            予測するとともに、安全に物体を配置することが可能な領域の候補を可視化する手法を提案。',
        },
    ];

    return (
        <Container sx={{ paddingY: '40px' }}>
        <Paper elevation={3} sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                研究内容
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
            </Paper>
        </Container>
    );
};

export default MyWorks;