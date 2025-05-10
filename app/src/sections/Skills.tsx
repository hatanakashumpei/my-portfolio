import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const skills = [
  {
    icon: '/python.svg',
    label: 'Python',
    experience: '6年以上',
    level: 5,
    remarks: '主にPytorchを用いて深層学習のモデルを論文を見ながら実装可能である。\
    その他、アプリケーション等の開発経験あり。',
  },
  {
    icon: '/linux-tux.svg',
    label: 'Linux',
    experience: '4年以上',
    level: 4,
    remarks: 'サーバー管理とシステム構築で活用。',
  },
  {
    icon: '/git.svg',
    label: 'Git/GitHub',
    experience: '4年以上',
    level: 5,
    remarks: 'バージョン管理とコラボレーション。',
  },
  {
    icon: '/docker-icon.svg',
    label: 'Docker',
    experience: '4年以上',
    level: 5,
    remarks: 'コンテナベースの環境構築。',
  },
  {
    icon: '/postgresql.svg',
    label: 'PostgreSQL',
    experience: '3年以上',
    level: 4,
    remarks: 'データベース設計とクエリの最適化。',
  },
  {
    icon: '/javascript.svg',
    label: 'JavaScript',
    experience: '1年程度',
    level: 4,
    remarks: '動的なWebコンテンツの実装。',
  },
  {
    icon: '/html-5.svg',
    label: 'HTML',
    experience: '1年程度',
    level: 4,
    remarks: 'フロントエンド開発での基本的な使用。',
  },
  {
    icon: '/css-3.svg',
    label: 'CSS',
    experience: '1年程度',
    level: 4,
    remarks: 'レスポンシブデザインとカスタムスタイリング。',
  },
  {
    icon: '/php.svg',
    label: 'PHP',
    experience: '数か月程度',
    level: 2,
    remarks: 'バックエンドのWebアプリケーション構築。',
  },
  {
    icon: '/aws.svg',
    label: 'AWS',
    experience: '数か月程度',
    level: 2,
    remarks: 'クラウドサービスを用いたアプリケーション構築。',
  },
  {
    icon: '/google-cloud.svg',
    label: 'GCP',
    experience: '数か月程度',
    level: 2,
    remarks: 'クラウドプラットフォームを活用したAIモデル構築。',
  },
  {
    icon: '/c-sharp.svg',
    label: 'C#',
    experience: '半年程度',
    level: 2,
    remarks: 'ゲーム開発とデスクトップアプリ開発。',
  },
  {
    icon: '/java.svg',
    label: 'Java',
    experience: '数か月程度',
    level: 1,
  },
  {
    icon: '/c-plusplus.svg',
    label: 'C++',
    experience: '半年程度',
    level: 1,
    remarks: 'C++にて競技プログラミングを経験',
  },
];

const Skills: React.FC = () => {
  const [showLevelInfo, setShowLevelInfo] = useState(false);

  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          ITスキル
        </Typography>

        {/* 展開・折りたたみ可能なレベル指標セクション */}
        <Box sx={{ marginTop: '20px' }}>
          <Button
            variant="outlined"
            startIcon={showLevelInfo ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            onClick={() => setShowLevelInfo(!showLevelInfo)}
            sx={{ marginBottom: '10px' }}
          >
            プログラミング言語のレベル指標を表示
          </Button>

          {showLevelInfo && (
            <Box sx={{ paddingLeft: '20px' }}>
              <Typography variant="body1" component="ul">
                <li>レベル5: 他者に指導ができるほど、詳細な仕様についても熟知している。</li>
                <li>レベル4: 自分の得意武器として日常的に問題なく活用している。</li>
                <li>レベル3: 必要に応じてリファレンスを確認しながら、一通り自力で使える。</li>
                <li>レベル2: 基本的な使い方は理解しており、常にリファレンスを見ながらであれば指定された操作が可能。</li>
                <li>レベル1: 大学の講義や実習あるいは趣味で触れたことがある程度。</li>
              </Typography>
            </Box>
          )}
        </Box>
        {/* レベル3以上のスキル（2列グリッド表示） */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {skills.filter(skill => skill.level >= 3).map((skill, index) => (
            <Paper
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ width: 56, height: 56, marginRight: '20px' }}>
                <img src={skill.icon} alt={skill.label} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{skill.label}</Typography>
                <Typography variant="body2">経験年数: {skill.experience}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginY: '5px' }}>
                  <Typography variant="body2">レベル:</Typography>
                  {[...Array(5)].map((_, i) =>
                    i < skill.level ? <StarIcon key={i} color="primary" fontSize="small" /> : <StarBorderIcon key={i} color="disabled" fontSize="small" />
                  )}
                </Box>
                <Typography variant="body2">備考: {skill.remarks}</Typography> {/* 追加 */}
              </Box>
            </Paper>
          ))}
        </Box>

        {/* レベル2以下のスキル（3列グリッド表示、備考なし） */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
          {skills.filter(skill => skill.level <= 2).map((skill, index) => (
            <Paper
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ width: 56, height: 56, marginRight: '20px' }}>
                <img src={skill.icon} alt={skill.label} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{skill.label}</Typography>
                <Typography variant="body2">経験年数: {skill.experience}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginY: '5px' }}>
                  <Typography variant="body2">レベル:</Typography>
                  {[...Array(5)].map((_, i) =>
                    i < skill.level ? <StarIcon key={i} color="primary" fontSize="small" /> : <StarBorderIcon key={i} color="disabled" fontSize="small" />
                  )}
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

      </Paper>
    </Container>
  );
};

export default Skills;