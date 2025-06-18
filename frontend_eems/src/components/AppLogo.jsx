import React from 'react';
import { Box, Typography } from '@mui/material';

const AppLogo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
      <Typography variant="h5" color="primary">
        Header
      </Typography>
    </Box>
  );
};

export default AppLogo;