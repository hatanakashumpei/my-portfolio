import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SpeakerDeckSlide: React.FC<{ id: string }> = ({ id }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//speakerdeck.com/assets/embed.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="speakerdeck-embed"
      data-id={id}
      data-ratio="1.777"
      style={{
        maxWidth: '100%',
        width: '100%',
      }}
    ></div>
  );
};

const Slides: React.FC = () => {
  const slides_jurnal_club = [
    { id: '409173c9aa494d67b194e2ea11e70f36' },
    { id: '5256a485917d41fe85e845852f2cd84c' },
    { id: '5a6900fb4b8140b7827a57e1617d04eb' },
    { id: 'a5b9ad355bb74be8bcc8007bfcad03b3' },
    { id: '73782f6358c14ca5ad08480dfbf6afe6' },
    { id: 'fdff0e36e7914026a7077bc76e021b40' },
    { id: '795a2b97c6c64296a0f209f1e0c4650e' },
    { id: 'cebb0498b73c4f73b87e2efd5b3f1bb2' },
  ];

  const slides_my_publications = [
    { id: '1212fbb2321a4c76979abc4e0239780a' },
    { id: '4bd9b59980524c159be82fa822b5bc1c' },
    { id: '770fb94599bb4cdd9d2c5a5d1fe90aa5' },
  ];

  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          輪講資料
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {slides_jurnal_club.map((slide, index) => (
              <Grid key={index} size={6}>
                <Item>
                  <SpeakerDeckSlide id={slide.id} />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography variant="h4" gutterBottom sx={{paddingTop: '20px'}}>
          研究スライド
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {slides_my_publications.map((slide, index) => (
              <Grid key={index} size={6}>
                <Item>
                  <SpeakerDeckSlide id={slide.id} />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Slides;