import { Container, Typography, Box, Chip, Paper, Fade } from '@mui/material';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import logoImage from '../assets/logo.png'; // Premium logo (replace with actual path)

const EmployeeDashboard = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        minHeight: 'calc(100vh - 128px)', // Adjust for navbar (~64px) and footer (~64px)
        bgcolor: 'rgba(255, 255, 255, 0.05)', // Subtle glassmorphism background
        backdropFilter: 'blur(5px)',
        background: 'linear-gradient(135deg, rgba(245, 247, 250, 0.8), rgba(187, 222, 251, 0.5))', // Light gradient
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      }}
    >
      {/* Premium Logo with Animation */}
      <Fade in timeout={800}>
        <Box
          component="img"
          src={logoImage}
          alt="EEMS Premium Logo"
          sx={{
            display: 'block',
            mx: 'auto',
            width: { xs: '150px', sm: '200px' },
            height: 'auto',
            mb: 3,
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05) rotate(5deg)', // Added rotation for premium feel
            },
          }}
        />
      </Fade>

      {/* Fallback Typography-based logo (uncomment if no image) */}
      {/*
      <Fade in timeout={800}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem' },
            letterSpacing: 2,
            mb: 3,
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          EEMS
        </Typography>
      </Fade>
      */}

      {/* Enhanced Title with Gradient and Chip */}
      <Fade in timeout={1000}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
          }}
        >
          Employee Dashboard{' '}
          <Chip
            label="Standard"
            color="default"
            size="small"
            sx={{ ml: 1, fontWeight: 'medium' }}
          />
          {/* Alternative: Custom color for better visibility */}
          {/*
          <Chip
            label="Standard"
            size="small"
            sx={{ ml: 1, fontWeight: 'medium', bgcolor: '#90caf9', color: '#fff' }}
          />
          */}
        </Typography>
      </Fade>

      {/* Expense Form Section */}
      <Fade in timeout={1200}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 2,
            bgcolor: 'rgba(255, 255, 255, 0.1)', // Glassmorphism effect
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 'medium' }}>
            Submit New Expense
          </Typography>
          <ExpenseForm />
        </Paper>
      </Fade>

      {/* Expense List Section */}
      <Fade in timeout={1400}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: 'rgba(255, 255, 255, 0.1)', // Glassmorphism effect
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 'medium' }}>
            Your Expenses
          </Typography>
          <ExpenseList />
        </Paper>
      </Fade>
    </Container>
  );
};

export default EmployeeDashboard;