import React from 'react';
import { Grid, Paper, Box, Container, Typography, styled } from '@mui/material';
import SpeakerDeckSlide from '../components/SpeakerDeckSlide';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const JurnalClubs: React.FC = () => {
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

  return (
    <Container sx={{ paddingY: '40px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        輪講スライド
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
      </Paper>
    </Container>
  );
};

export default JurnalClubs;