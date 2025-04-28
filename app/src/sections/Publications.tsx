import React from 'react';
import { Container, Typography, Paper, Box, IconButton } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Publications: React.FC = () => {
  const internationalPublications = [
    {
      authors: 'Y. Iioka, Y. Yoshida, Y. Wada, S. Hatanaka, and K. Sugiura',
      title: 'Multimodal Diffusion Segmentation Model for Object Segmentation from Manipulation Instructions',
      conference: 'IEEE/RSJ IROS',
      details: 'pp. 7590-7597, 2023',
      link: 'https://example.com/path/to/pdf1',
    },
    {
      authors: 'H. Matsuo, S. Hatanaka, A. Ueda, T. Hirakawa, T. Yamashita, H. Fujiyoshi, and K. Sugiura',
      title: 'Collision Prediction and Visual Explanation Generation Using Structural Knowledge in Object Placement Tasks',
      conference: 'IEEE/RSJ IROS',
      details: '2022 [poster]',
      link: 'https://example.com/path/to/pdf2',
    },
  ];

  const domesticPublications = [
    {
      authors: '今井悠人, 飯岡雄偉, 畑中駿平, 九曜克之, 杉浦孔明',
      title: 'マルチモーダル基盤モデルと拡散モデルに基づく対象物体の参照表現セグメンテーション',
      conference: '第41回日本ロボット学会学術講演会',
      details: '2K1-06, 2023',
      link: 'https://example.com/path/to/pdf3',
    },
    {
      authors: '平野慎之助, 小松拓実, 和田唯我, 神原元就, 畑中駿平, 平川翼, 山下隆義, 藤吉弘亘, 杉浦孔明',
      title: 'ENCHANT: 大規模言語モデルを用いた仮説生成に基づくクロスモーダル説明文生成',
      conference: '第41回日本ロボット学会学術講演会',
      details: '1K4-03, 2023',
      link: 'https://example.com/path/to/pdf4',
    },
    // その他の国内会議のデータをここに追加
  ];

  const patents = [
    {
      authors: '細見直希，翠輝久，山田健太郎，畑中駿平，ヤンウェイ，杉浦孔明',
      title: '移動体制御装置、移動体制御方法、学習装置、学習方法、生成装置、およびプログラム',
      details: '特願2023-137591（2023年8月25日出願）, 特開2024-31978（2024年3月7日公開）',
    },
  ];

  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          業績
        </Typography>

        {/* 国際会議 */}
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>
            国際会議
          </Typography>
          {internationalPublications.map((pub, index) => (
            <Typography variant="body1" sx={{ marginBottom: '10px' }} key={index}>
              {index + 1}. {pub.authors}, “{pub.title},” {pub.conference}, {pub.details}
              {pub.link && (
                <IconButton
                  component="a"
                  href={pub.link}
                  target="_blank"
                  color="primary"
                  sx={{ marginLeft: '10px' }}
                >
                  <PictureAsPdfIcon />
                </IconButton>
              )}
            </Typography>
          ))}
        </Box>

        {/* 国内会議 */}
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>
            国内会議
          </Typography>
          {domesticPublications.map((pub, index) => (
            <Typography variant="body1" sx={{ marginBottom: '10px' }} key={index}>
              {index + 1}. {pub.authors}, “{pub.title},” {pub.conference}, {pub.details}
              {pub.link && (
                <IconButton
                  component="a"
                  href={pub.link}
                  target="_blank"
                  color="primary"
                  sx={{ marginLeft: '10px' }}
                >
                  <PictureAsPdfIcon />
                </IconButton>
              )}
            </Typography>
          ))}
        </Box>

        {/* 特許 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            特許
          </Typography>
          {patents.map((patent, index) => (
            <Typography variant="body1" sx={{ marginBottom: '10px' }} key={index}>
              {index + 1}. {patent.authors}, {patent.title}, {patent.details}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default Publications;