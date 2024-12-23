import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: 2,
        backgroundColor: '#f0f0f0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">© 2024 Ptolemy Dashboard. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer