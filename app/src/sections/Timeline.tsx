import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import WorkIcon from '@mui/icons-material/Work';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';

const TimelineSection: React.FC = () => {
    const timelineEvents = [
        {
            year: 'B1-B4',
            title: 'エンジニアリング',
            description: 'バックエンドからフロントエンドまで幅広く開発を経験。',
            icon: <ComputerIcon />,
        },
        {
            year: 'M1-M2',
            title: 'マルチモーダルAI研究',
            description: '参照表現セグメンテーション（RES）を専門分野として研究。',
            icon: <SchoolIcon />,
        },
        {
            year: '2024/04 - 現在',
            title: '総合コンサルティングファーム',
            description: 'AIに関するITコンサルタントとして勤務。',
            icon: <WorkIcon />,
        },
    ];

    return (
        <Container sx={{ paddingY: '40px' }}>
            <Paper elevation={3} sx={{ padding: '20px', marginBottom: '40px' }}>
                <Typography variant="h4" gutterBottom>
                    経歴タイムライン
                </Typography>
                <Timeline
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2, // 年代を狭い幅で左側に表示
                        },
                    }}
                >
                    {timelineEvents.map((event, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent color="text.secondary">
                                <Typography variant="body2">{event.year}</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary">{event.icon}</TimelineDot>
                                {index < timelineEvents.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6">{event.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {event.description}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Paper>
        </Container>
    );
};

export default TimelineSection;