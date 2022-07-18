import { Box, Container, ListItemButton, ListItemText } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Board = () => {
  const Navigate = useNavigate();
  return (
    <Container>
      <Box>
        <React.Fragment>
          <ListItemButton
            onClick={() => {
              Navigate('/board');
            }}
          >
            <ListItemText primary="Board" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              Navigate('/new');
            }}
          >
            <ListItemText primary="Upload" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Stream" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="settings" />
          </ListItemButton>
        </React.Fragment>
      </Box>
    </Container>
  );
};
export default Board;
