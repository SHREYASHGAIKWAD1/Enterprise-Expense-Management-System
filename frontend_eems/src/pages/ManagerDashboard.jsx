import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Box, Chip, Alert } from '@mui/material';
import ExpenseList from '../components/ExpenseList';
import logoImage from '../assets/logo.png'; // Premium logo (replace with actual path)

const ManagerDashboard = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 6, // Increased padding for a more spacious look
        minHeight: 'calc(100vh - 128px)', // Adjust for navbar (~64px) and footer (~64px)
        backgroundColor: '#fff', // Clean white background like Zoho
      }}
    >
      {/* Hero Section with Logo */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Box
          component="img"
          src={logoImage}
          alt="EEMS Premium Logo"
          sx={{
            display: 'block',
            mx: 'auto',
            width: { xs: '200px', sm: '250px' }, // Slightly larger logo
            height: 'auto',
            mb: 3,
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))', // Softer shadow
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.03)', // Subtle hover effect
            },
          }}
        />
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700, // Bold heading like Zoho
            fontSize: { xs: '2rem', sm: '2.8rem' }, // Slightly larger
            color: '#333', // Dark text for professionalism
            letterSpacing: '0.5px',
          }}
        >
          Manager Dashboard
          <Chip
            label="Premium"
            color="primary"
            size="small"
            sx={{
              ml: 1,
              backgroundColor: '#0052cc', // Zoho's blue accent
              color: '#fff',
              fontWeight: 500,
            }}
          />
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: '700px',
            mx: 'auto',
            fontSize: '1.1rem', // Slightly larger for readability
            color: '#666', // Lighter gray for body text
            lineHeight: 1.6, // Better readability
          }}
        >
          Review and manage employee expenses, approve or reject submissions, and export reports as PDF.
        </Typography>
      </Box>

      {/* Expense List Section */}
      <Box
        sx={{
          backgroundColor: '#f9f9f9', // Light gray background for the section
          borderRadius: '12px', // Rounded corners like Zoho
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', // Subtle shadow
          p: 4, // Padding for the section
          mt: 4,
        }}
      >
        {expenses.length === 0 ? (
          <Alert
            severity="info"
            sx={{
              borderRadius: '8px',
              backgroundColor: '#e6f0fa', // Light blue background for the alert
              color: '#333',
              fontSize: '1rem',
            }}
          >
            No expenses found. Employees can submit expenses via their dashboard.
          </Alert>
        ) : (
          <ExpenseList isManager={true} />
        )}
      </Box>
    </Container>
  );
};

export default ManagerDashboard;