import React from 'react';
import { Container, Typography, Paper, Box, IconButton } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Publications: React.FC = () => {
  const formatAuthors = (authors: string) => {
    return authors.split(', ').map((author, index) =>
      /(S\. Hatanaka|畑中駿平)/.test(author) ? (
        <Typography component="span" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} key={index}>
          {author}
        </Typography>
      ) : (
        <Typography component="span" key={index}>
          {author}
        </Typography>
      )
    ).reduce<React.ReactNode[]>((prev, curr) => [...prev, ', ', curr], []).slice(1);
  };

  const internationalPublications = [
    {
      authors: 'N. Hosomi, Y. Iioka, S. Hatanaka, T. Misu, K. Yamada, N. Tsukamoto, S. Kobayashi, and K. Sugiura',
      title: 'Multimodal Target Localization with Landmark-Aware Positioning for Urban Mobility',
      conference: 'IEEE Robotics and Automation Letters',
      details: 'Vol. 10, Issue 1, pp. 716-723, 2025. DOI: 10.1109/LRA.2024.3511404',
      link: 'https://ieeexplore.ieee.org/document/10777394'
    },
    {
      authors: 'T. Komatsu, M. Kambara, S. Hatanaka, H. Matsuo, T. Hirakawa, T. Yamashita, H. Fujiyoshi, and K. Sugiura',
      title: 'Nearest Neighbor Future Captioning: Generating Descriptions for Possible Collisions in Object Placement Tasks',
      conference: 'Advanced Robotics',
      details: 'Vol. 38, Issue 18, pp. 1265-1276, 2024. DOI: 10.1080/01691864.2024.2388114',
      link: 'https://arxiv.org/abs/2407.13186'
    },
    {
      authors: 'N. Hosomi, S. Hatanaka, Y. Iioka, W. Yang, K. Kuyo, T. Misu, K. Yamada, and K. Sugiura',
      title: 'Trimodal Navigable Region Segmentation Model: Grounding Navigation Instructions in Urban Areas',
      conference: 'IEEE Robotics and Automation Letters',
      details: 'Vol. 9, Issue 5, pp. 4162-4169, 2024. DOI: 10.1109/LRA.2024.3376957',
      link: 'https://ieeexplore.ieee.org/document/10471887'
    },
  ]
  const internationalConferences = [
    {
      authors: 'N. Hosomi, Y. Iioka, S. Hatanaka, T. Misu, K. Yamada, and K. Sugiura',
      title: 'Target Position Regression from Navigation Instructions',
      conference: 'IEEE ICRA',
      details: '2024 [poster]',
    },
    {
      authors: 'Y. Iioka, Y. Yoshida, Y. Wada, S. Hatanaka, and K. Sugiura',
      title: 'Multimodal Diffusion Segmentation Model for Object Segmentation from Manipulation Instructions',
      conference: 'IEEE/RSJ IROS',
      details: 'pp. 7590-7597, 2023. DOI: 10.1109/IROS55552.2023.10341388',
      link: 'https://ieeexplore.ieee.org/abstract/document/10341402',
    },
    {
      authors: 'H. Matsuo, S. Hatanaka, A. Ueda, T. Hirakawa, T. Yamashita, H. Fujiyoshi, and K. Sugiura',
      title: 'Collision Prediction and Visual Explanation Generation Using Structural Knowledge in Object Placement Tasks',
      conference: 'IEEE/RSJ IROS',
      details: '2022 [poster]',
    },
  ];

  const domesticPublications = [
    {
      authors: '今井悠人, 飯岡雄偉, 畑中駿平, 九曜克之, 杉浦孔明',
      title: 'マルチモーダル基盤モデルと拡散モデルに基づく対象物体の参照表現セグメンテーション',
      conference: '第41回日本ロボット学会学術講演会',
      details: '2K1-06, 2023',
      link: 'https://smilab.org/pdf/2023/2023-09-19T13:48:38+09:00_Yuto_Imai.pdf',
    },
    {
      authors: '平野慎之助, 小松拓実, 和田唯我, 神原元就, 畑中駿平, 平川翼, 山下隆義, 藤吉弘亘, 杉浦孔明',
      title: 'ENCHANT: 大規模言語モデルを用いた仮説生成に基づくクロスモーダル説明文生成',
      conference: '第41回日本ロボット学会学術講演会',
      details: '1K4-03, 2023',
      link: 'https://smilab.org/pdf/2023/2023-09-19T13:47:48+09:00_Shinnosuke_Hirano.pdf',
    },
    {
      authors: '畑中駿平, 楊巍, 九曜克之, 細見直希, 翠輝久, 山田健太郎, 杉浦孔明',
      title: '市街地での移動指示文に基づく目標領域予測',
      conference: '2023年度 人工知能学会全国大会',
      details: '2M6-GS-10-03, 2023',
      link: 'https://smilab.org/pdf/2023/2023-05-31T21:59:38+09:00_Shumpei_Hatanaka.pdf',
    },
    {
      authors: '飯岡雄偉, 吉田悠, 和田唯我, 畑中駿平, 杉浦孔明',
      title: '生活支援タスクにおける大規模視覚言語モデルと拡散確率モデルを用いた参照表現セグメンテーション',
      conference: '2023年度 人工知能学会全国大会',
      details: '3G5-OS-24b-04, 2023',
      link: 'https://smilab.org/pdf/2023/2023-05-31T15:57:32+09:00_Yui_Iioka.pdf',
    },
    {
      authors: '小松拓実, 神原元就, 畑中駿平, 松尾榛夏, 平川翼, 山下隆義, 藤吉弘亘, 杉浦孔明',
      title: 'Nearest Neighbor Future Captioning:物体配置タスクにおける衝突リスクに関する説明文生成',
      conference: '2023年度 人工知能学会全国大会',
      details: '3G1-OS-24a-05, 2023',
      link: 'https://smilab.org/pdf/2023/2023-05-31T19:25:58+09:00_Takumi_Komatsu.pdf',
    },
    {
      authors: '畑中駿平, Wei Yang, 細見直希, 翠輝久, 山田健太郎, 杉浦孔明',
      title: '市街地での移動指示理解タスクにおけるUNITER Regressorによる目標位置予測',
      conference: '第126回 知識ベースシステム研究会',
      details: '2022',
      link: 'https://www.jstage.jst.go.jp/article/jsaikbs/126/0/126_34/_article/-char/ja/',
    },
    {
      authors: '松尾榛夏, 畑中駿平, 平川翼, 山下隆義, 藤吉弘亘, 杉浦孔明',
      title: '物体配置タスクにおける構造的知識を用いた衝突予測および視覚的説明生成',
      conference: '第40回日本ロボット学会学術講演会',
      details: '4F3-03, 2022',
      link: 'https://smilab.org/pdf/2022/2022-10-11T16:16:40+09:00_Haruka_Matsuo.pdf',
    },
    {
      authors: '畑中駿平, 上田雄斗, 植田有咲, 平川翼, 山下隆義, 藤吉弘亘, 杉浦孔明',
      title: '生活支援ロボットによる物体配置タスクにおける危険性予測および視覚的説明生成',
      conference: '第39回日本ロボット学会学術講演会',
      details: '1I4-02, 2021',
      link: 'https://smilab.org/pdf/2022/2022-07-09T10:29:10+09:00_Shumpei_Hatanaka.pdf',
    },

  ];

  const patents = [
    {
      authors: '細見直希, 翠輝久, 山田健太郎, 畑中駿平, ヤンウェイ, 杉浦孔明',
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

        {/* 国際ジャーナル */}
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>
            国際ジャーナル
          </Typography>
          {internationalPublications.map((pub, index) => (
            <Typography variant="body1" sx={{ marginBottom: '10px' }} key={index}>
              {index + 1}. {formatAuthors(pub.authors)}, “{pub.title},” {pub.conference}, {pub.details}
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

        {/* 国際会議 */}
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>
            国際会議
          </Typography>
          {internationalConferences.map((pub, index) => (
            <Typography variant="body1" sx={{ marginBottom: '10px' }} key={index}>
              {index + 1}. {formatAuthors(pub.authors)}, “{pub.title},” {pub.conference}, {pub.details}
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
              {index + 1}. {formatAuthors(pub.authors)}, “{pub.title},” {pub.conference}, {pub.details}
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
              {index + 1}. {formatAuthors(patent.authors)}, {patent.title}, {patent.details}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default Publications;