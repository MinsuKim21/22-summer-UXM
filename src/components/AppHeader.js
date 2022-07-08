import { Box, Button, Container, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import React from 'react';

const AppHeader = () => {
  const Navigate = useNavigate();
  return (
    <Container
      fontWeight={'fontWeightMedium'}
      style={{ display: 'flex' }}
    >
      <Box justifyContent="start" width="25%">
        <Button
          onClick={() => {
            Navigate('/login');
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => {
            Navigate('/signup');
          }}
        >
          Signup
        </Button>
      </Box>
      <Box justifyContent="center" width="50%" textAlign="center">
        <Typography component="h1" variant="h3">
          제목
        </Typography>
      </Box>
      <Box justifyContent="end" width="25%">
        <Button
          onClick={() => {
            Navigate('/home');
          }}
        >
          HOME
        </Button>
      </Box>
    </Container>
  );
};
export default AppHeader;
