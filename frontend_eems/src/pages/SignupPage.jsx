import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  MenuItem,
  Paper,
  Fade,
  Zoom,
  CircularProgress,
} from '@mui/material';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import bgImage from '../assets/loginbg.jpg'; // Background image
import logoImage from '../assets/logo.png'; // Premium logo (replace with actual path)

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Employee');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await registerUser({ name, email, password, role });
      dispatch(login(response.data));
      navigate('/login');
    } catch (error) {
      alert('Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* CSS hack to hide footer */}
      <style>
        {`
          .footer, footer, [class*="Footer"], [class*="MuiBox-root"][component="footer"] {
            display: none !important;
          }
        `}
      </style>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
          bgcolor: 'grey.100',
        }}
      >
        <Container maxWidth="sm" sx={{ py: 4 }}>
          <Fade in timeout={800}>
            <Zoom in timeout={600}>
              <Paper
                elevation={12}
                sx={{
                  maxWidth: 450,
                  mx: 'auto',
                  p: { xs: 3, sm: 5 },
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 20,
                  },
                }}
              >
                {/* Premium Logo */}
                <Box
                  component="img"
                  src={logoImage}
                  alt="EEMS Premium Logo"
                  sx={{
                    display: 'block',
                    mx: 'auto',
                    width: { xs: '150px', sm: '200px' },
                    height: 'auto',
                    mb: 2,
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                {/* Fallback Typography-based logo (uncomment if no image) */}
                {/*
                <Typography
                  variant="h3"
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '2rem', sm: '2.5rem' },
                    letterSpacing: 2,
                    mb: 2,
                    background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  EEMS
                </Typography>
                */}
                <Typography
                  variant="body1"
                  align="center"
                  color="text.secondary"
                  sx={{ mb: 4, fontSize: '1rem' }}
                >
                  Create your premium account for the Expense Management System
                </Typography>
                <form onSubmit={handleSignup}>
                  <TextField
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                    variant="outlined"
                    autoComplete="name"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        '&:hover fieldset': { borderColor: 'primary.main' },
                        '&.Mui-focused fieldset': { borderWidth: 2, borderColor: 'primary.main' },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        '&.Mui-focused': { color: 'primary.main' },
                        transform: 'translate(14px, -6px) scale(0.75)', // Adjust upward
                      },
                    }}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                    variant="outlined"
                    autoComplete="email"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        '&:hover fieldset': { borderColor: 'primary.main' },
                        '&.Mui-focused fieldset': { borderWidth: 2, borderColor: 'primary.main' },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        '&.Mui-focused': { color: 'primary.main' },
                        transform: 'translate(14px, -6px) scale(0.75)', // Adjust upward
                      },
                    }}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                    variant="outlined"
                    autoComplete="new-password"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        '&:hover fieldset': { borderColor: 'primary.main' },
                        '&.Mui-focused fieldset': { borderWidth: 2, borderColor: 'primary.main' },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        '&.Mui-focused': { color: 'primary.main' },
                        transform: 'translate(14px, -6px) scale(0.75)', // Adjust upward
                      },
                    }}
                  />
                  <TextField
                    select
                    label="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        '&:hover fieldset': { borderColor: 'primary.main' },
                        '&.Mui-focused fieldset': { borderWidth: 2, borderColor: 'primary.main' },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        '&.Mui-focused': { color: 'primary.main' },
                        transform: 'translate(14px, -6px) scale(0.75)', // Adjust upward
                      },
                    }}
                  >
                    <MenuItem value="Employee">Employee</MenuItem>
                    <MenuItem value="Manager">Manager (Premium)</MenuItem>
                    <MenuItem value="Admin">Admin (Premium)</MenuItem>
                  </TextField>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 'medium',
                      borderRadius: 1,
                      background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1565c0, #2196f3)',
                        transform: 'translateY(-2px)',
                      },
                      '&:disabled': {
                        bgcolor: 'primary.light',
                      },
                    }}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
                  </Button>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ mt: 3, color: 'text.secondary' }}
                  >
                    Have an account?{' '}
                    <a
                      href="/login"
                      style={{
                        color: 'primary.main',
                        textDecoration: 'none',
                        fontWeight: 'medium',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = 'primary.dark')}
                      onMouseLeave={(e) => (e.target.style.color = 'primary.main')}
                    >
                      Log In
                    </a>
                  </Typography>
                </form>
              </Paper>
            </Zoom>
          </Fade>
        </Container>
      </Box>
    </>
  );
};

export default SignupPage;