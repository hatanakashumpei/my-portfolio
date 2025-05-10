import React from 'react';
import { Container, Typography, Paper, Avatar, Stack, List, ListItem, ListItemText } from '@mui/material';

const Biography: React.FC = () => {
  // 氏名情報をオブジェクト化
  const nameInfo = {
    lastName: {
      kanji: "畑中",
      furigana: "ハタナカ"
    },
    firstName: {
      kanji: "駿平",
      furigana: "シュンペイ"
    }
  };

  // プロフィール情報
  const bioPoints = [
    '2022年慶應義塾大学理工学部情報工学科卒業。2024年同理工学研究科開放環境科学専攻修士課程修了。',
    '2024年総合コンサルティングファームに新卒で入社後、コンサルタントとしてITやAIに関するシステム刷新等を経験。',
  ];

  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '40px' }}>
        <Stack direction="row" spacing={4} alignItems="center">
          <Avatar
            alt="Shumpei Hatanaka"
            src="/my_picture.jpg"
            sx={{ width: 200, height: 200 }}
          />

          {/* 右側 - 名前と内容 */}
          <Stack spacing={2}>
            {/* 苗字と名前を別グループにして、フリガナを上に配置 */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Stack direction="column" alignItems="center">
                <Typography variant="caption" sx={{ color: 'gray' }}>
                  {nameInfo.lastName.furigana}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {nameInfo.lastName.kanji}
                </Typography>
              </Stack>

              <Stack direction="column" alignItems="center">
                <Typography variant="caption" sx={{ color: 'gray' }}>
                  {nameInfo.firstName.furigana}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {nameInfo.firstName.kanji}
                </Typography>
              </Stack>
            </Stack>
            <List>
              {bioPoints.map((point, index) => (
                <ListItem key={index} disableGutters sx={{ padding: 0, margin: 0 }}>
                  <ListItemText primary={point} sx={{ margin: 0 }} />
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