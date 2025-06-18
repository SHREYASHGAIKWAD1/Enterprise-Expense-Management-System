import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import { styled } from '@mui/material/styles';
import logo from '../assets/nav-logo.png'; // Adjust the path to your logo file

// Styled AppBar with a premium dark background and glassmorphism effect
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(26, 26, 46, 0.95)', // Dark background with slight transparency
  backdropFilter: 'blur(10px)', // Glassmorphism blur effect
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', // Deeper shadow for depth
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    padding: '1px', // Gradient border
    background: 'linear-gradient(45deg, #1976d2, #42a5f5)', // Gradient matching MainPage
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  fontWeight: 600,
  background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))', // Subtle gradient
  borderRadius: '8px',
  padding: '8px 16px',
  marginLeft: theme.spacing(1),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3))',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontWeight: 600,
  letterSpacing: '0.5px',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)', // Subtle text shadow
}));

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ py: 1 }}> {/* Added padding for spacing */}
        <Box
          component="img"
          src={logo}
          alt="The Enterprise Expense Management System Logo"
          sx={{
            height: '60px', // Height for better visibility
            width: 'auto', // Maintain aspect ratio
            mr: 3, // Increased margin-right for spacing
            display: 'block', // Ensure proper rendering
            transition: 'filter 0.3s ease',
            '&:hover': {
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))', // Glow effect on hover
            },
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        {user ? (
          <>
            <StyledTypography variant="body1" sx={{ mr: 3 }}>
              Welcome to EEMS
            </StyledTypography>
            <StyledButton onClick={() => navigate(`/${user.role.toLowerCase()}-dashboard`)}>
              Dashboard
            </StyledButton>
            <StyledButton onClick={handleLogout}>
              Logout
            </StyledButton>
          </>
        ) : (
          <>
            <StyledButton onClick={() => navigate('/login')}>
              Login
            </StyledButton>
            <StyledButton onClick={() => navigate('/signup')}>
              Signup
            </StyledButton>
          </>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;