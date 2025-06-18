import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        p: 2,
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © 2025 Enterprise Expense Management System. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;