import React from 'react';
import { Box, Typography, Button, Container, Grid, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Placeholder images for features
const featureImages = {
  submit: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
  approvals: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
  analytics: 'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
  pdf: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
};

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  px: 4,
  py: 1.5,
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const MainPage = () => {
  const navigate = useNavigate();

  const features = [
    { title: 'Submit and Track Expenses', image: featureImages.submit },
    { title: 'Automated Approvals (Premium: Manager)', image: featureImages.approvals },
    { title: 'Real-time Analytics (Premium: Admin)', image: featureImages.analytics },
    { title: 'PDF Reporting (Premium)', image: featureImages.pdf },
  ];

  return (
    <Box sx={{ background: 'linear-gradient(180deg, #f5f6fa, #fff)', minHeight: '100vh' }}>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          backgroundImage: `
            linear-gradient(rgba(25, 118, 210, 0.7), rgba(66, 165, 245, 0.7)), 
            url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')
          `, // Overlay + Background Image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay', // Blend gradient overlay with image
          py: { xs: 8, sm: 12 },
          textAlign: 'center',
          color: '#fff',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50px',
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
          },
        }}
      >
        <Container maxWidth="md">
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.8rem', sm: '4rem' },
                  letterSpacing: '1px',
                  background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 3px 6px rgba(0, 0, 0, 0.3)',
                }}
              >
                Welcome to EEMS
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.3rem',
                  maxWidth: '700px',
                  mx: 'auto',
                  opacity: 0.9,
                  mb: 5,
                  fontWeight: 300,
                }}
              >
                Streamline expense tracking, approvals, and analytics with our premium system.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <StyledButton
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(45deg, #fff, #e0e0e0)',
                    color: '#1976d2',
                  }}
                  onClick={() => navigate('/login')}
                >
                  Login
                </StyledButton>
                <StyledButton
                  variant="outlined"
                  sx={{
                    color: '#fff',
                    borderColor: '#fff',
                    '&:hover': {
                      borderColor: '#e0e0e0',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                  onClick={() => navigate('/signup')}
                >
                  Signup
                </StyledButton>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Features Section (Unchanged) */}
      <Container maxWidth="lg" sx={{ py: 10, textAlign: 'center' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#333',
            mb: 6,
            fontSize: { xs: '2rem', sm: '2.5rem' },
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Premium Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '20px',
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
                    background: 'rgba(255, 255, 255, 0.15)',
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '20px',
                    padding: '1px',
                    background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                    WebkitMask:
                      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '180px',
                    borderRadius: '16px',
                    mb: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                    '&:hover::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '16px',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={feature.image}
                    alt={feature.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/500x180?text=Image+Not+Found';
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#333',
                    fontWeight: 600,
                    textAlign: 'center',
                    flexGrow: 1,
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {feature.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MainPage;