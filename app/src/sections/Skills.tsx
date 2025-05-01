import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const skills = [
  {
    icon: '/icons/python.svg',
    label: 'Python',
    experience: '5+ years',
    level: 4,
    remarks: 'データ分析とAI開発を含む幅広い用途。',
  },
  {
    icon: '/icons/linux-tux.svg',
    label: 'Linux',
    experience: '6+ years',
    level: 5,
    remarks: 'サーバー管理とシステム構築で活用。',
  },
  {
    icon: '/icons/postgresql.svg',
    label: 'SQL',
    experience: '4+ years',
    level: 4,
    remarks: 'データベース設計とクエリの最適化。',
  },
  {
    icon: '/icons/java.svg',
    label: 'Java',
    experience: '3+ years',
    level: 3,
    remarks: 'エンタープライズソフトウェア開発。',
  },
  {
    icon: '/icons/c-sharp.svg',
    label: 'C#',
    experience: '2+ years',
    level: 2,
    remarks: 'ゲーム開発とデスクトップアプリ開発。',
  },
  {
    icon: '/icons/c-plusplus.svg',
    label: 'C++',
    experience: '3+ years',
    level: 3,
    remarks: '高パフォーマンスシステムの設計。',
  },
  {
    icon: '/icons/html-5.svg',
    label: 'HTML',
    experience: '5+ years',
    level: 5,
    remarks: 'フロントエンド開発での基本的な使用。',
  },
  {
    icon: '/icons/css-3.svg',
    label: 'CSS',
    experience: '5+ years',
    level: 5,
    remarks: 'レスポンシブデザインとカスタムスタイリング。',
  },
  {
    icon: '/icons/javascript.svg',
    label: 'JavaScript',
    experience: '5+ years',
    level: 5,
    remarks: '動的なWebコンテンツの実装。',
  },
  {
    icon: '/icons/php.svg',
    label: 'PHP',
    experience: '4+ years',
    level: 3,
    remarks: 'バックエンドのWebアプリケーション構築。',
  },
  {
    icon: '/icons/git.svg',
    label: 'Git/GitHub',
    experience: '6+ years',
    level: 5,
    remarks: 'バージョン管理とコラボレーション。',
  },
  {
    icon: '/icons/docker-icon.svg',
    label: 'Docker',
    experience: '3+ years',
    level: 4,
    remarks: 'コンテナベースの環境構築。',
  },
  {
    icon: '/icons/aws.svg',
    label: 'AWS',
    experience: '3+ years',
    level: 4,
    remarks: 'クラウドサービスを用いたアーキテクチャ設計。',
  },
  {
    icon: '/icons/google-cloud.svg',
    label: 'GCP',
    experience: '2+ years',
    level: 3,
    remarks: 'クラウドプラットフォームを活用した分析基盤構築。',
  },
];

const Skills: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          開発言語とスキル
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {skills.map((skill, index) => (
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
              {/* 左側: 画像表示 */}
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  marginRight: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.label}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              {/* 右側: テキスト情報 */}
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {skill.label}
                </Typography>
                <Typography variant="body2">経験年数: {skill.experience}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginY: '5px' }}>
                  <Typography variant="body2">レベル:</Typography>
                  {[...Array(5)].map((_, i) =>
                    i < skill.level ? (
                      <StarIcon key={i} color="primary" fontSize="small" />
                    ) : (
                      <StarBorderIcon key={i} color="disabled" fontSize="small" />
                    )
                  )}
                </Box>
                <Typography variant="body2">備考: {skill.remarks}</Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default Skills;