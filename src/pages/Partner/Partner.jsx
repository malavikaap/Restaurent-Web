import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material';
import logoImg from '../../assets/assets/logo.png';
import starImg from '../../assets/assets/Star.png';
import logosImg from '../../assets/assets/logos.png';

function Partner() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <img src={logoImg} alt='logo' style={{ maxWidth: '100%' }} />
          <Typography
            variant='body2'
            sx={{
              color: '#7D8589',
              fontSize: '16px',
              fontWeight: 'bold',
              mt: 2,
            }}
          >
            More than 45,000 people trust Techflix
          </Typography>
        </CustomBox>
        <Box>
          <img src={starImg} alt='stars' style={{ maxWidth: '100%' }} />
          <Typography
            variant='body2'
            sx={{
              color: '#7D8589',
              fontSize: '16px',
              fontWeight: 'bold',
              mt: 2,
            }}
          >
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <img src={logosImg} alt='logos' />
      </Container>
    </Box>
  );
}

export default Partner;
