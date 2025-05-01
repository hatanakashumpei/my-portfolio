import React from 'react';
import { Container, Typography, Paper, Avatar, Stack, List, ListItem, ListItemText } from '@mui/material';

const Biography: React.FC = () => {
  const bioPoints = [
    'バックエンドからフロントエンドまで幅広く開発を経験。',
    'マルチモーダルAI研究で参照表現セグメンテーション（RES）を専門分野とした。',
    '現在、総合コンサルティングファームにてAIに関するITコンサルタントとして勤務。',
  ];

  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '40px' }}>
        <Stack direction="row" spacing={4} alignItems="center">
          {/* 左側 - アバター画像 */}
          <Avatar
            alt="Shumpei Hatanaka"
            src="./src/assets/my_avater.jpg" // アバター画像の適切なパスを指定
            sx={{ width: 200, height: 200 }}
          />

          {/* 右側 - 名前と内容 */}
          <Stack spacing={2}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              畑中 駿平
            </Typography>
            <List>
              {bioPoints.map((point, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemText primary={point} />
                </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Biography;