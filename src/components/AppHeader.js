import { Box, Button, Container, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import React from 'react';

const AppHeader = () => {
  const Navigate = useNavigate();
  return (
    <Container fontWeight={'fontWeightMedium'} style={{ display: 'flex' }}>
      <Box display="flex" justifyContent="flex-start" width="25%">
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
      <Box
        display="flex"
        justifyContent="center"
        width="50%"
        textAlign="center"
      >
        <Typography component="h1" variant="h3">
          제목
        </Typography>
      </Box>
      <Box display="flex" justifyContent="flex-end" width="25%">
        <Button
          onClick={() => {
            Navigate('/main');
          }}
        >
          HOME
        </Button>
        <Button
          onClick={() => {
            Navigate('/board');
          }}
        >
          BOARD
        </Button>
      </Box>
    </Container>
  );
};
export default AppHeader;
