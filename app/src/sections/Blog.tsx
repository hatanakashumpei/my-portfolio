import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';

const Blog: React.FC = () => {
  // Note記事のデータ
  const noteArticles = [
    { src: 'https://note.com/embed/notes/n3cd278e78091', title: 'ChatGPT' },
    { src: 'https://note.com/embed/notes/n3e6c896ede5c', title: '男子バレー' },
    { src: 'https://note.com/embed/notes/n96cfe6e1fcd9', title: 'Tableau' },
  ];

  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          ブログ
        </Typography>
        <Grid container spacing={2}>
          {noteArticles.map((article, index) => (
            <Grid
              size={{ xs: 12, sm: 6 }}
              key={index}
            >
              <iframe
                className="note-embed"
                src={article.src}
                title={article.title}
                style={{
                  border: 0,
                  display: 'block',
                  maxWidth: '100%',
                  width: '100%',
                  marginBottom: '10px',
                  visibility: 'visible',
                }}
                height="410"
              ></iframe>
            </Grid>
          ))}
        </Grid>
        <script async src="https://note.com/scripts/embed.js"></script>
      </Paper>
    </Container>
  );
};

export default Blog;