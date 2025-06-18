import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Alert,
} from '@mui/material';
import AnalyticsChart from '../components/AnalyticsChart';
import ExpenseList from '../components/ExpenseList';
import { fetchUsers } from '../redux/userSlice';
import logoImage from '../assets/logo.png'; // Premium logo (replace with actual path)

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Mock delete user action (to be implemented with real API)
  const handleDeleteUser = (userId) => {
    alert(`Delete user with ID: ${userId} (Mock action)`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
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
      <Typography variant="h4" gutterBottom>
        Admin Dashboard <Chip label="Premium" color="primary" size="small" />
      </Typography>

      {/* Expense Management (from Manager Dashboard) */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Expense Management
      </Typography>
      <ExpenseList isManager={true} />

      {/* Expense Analytics */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Expense Analytics (Premium)
      </Typography>
      <AnalyticsChart />

      {/* User Management */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        User Management
      </Typography>
      {status === 'loading' && <Typography>Loading users...</Typography>}
      {status === 'failed' && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error || 'Failed to fetch users'}
        </Alert>
      )}
      {status === 'succeeded' && users.length === 0 && (
        <Typography>No users found.</Typography>
      )}
      {status === 'succeeded' && users.length > 0 && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default AdminDashboard;