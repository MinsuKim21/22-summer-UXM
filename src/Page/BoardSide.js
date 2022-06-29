import { Container, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

const Board = () => {
  return (
    <Container>
      <Box>
        <React.Fragment>
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Orders" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Customers" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Integrations" />
          </ListItemButton>
        </React.Fragment>
      </Box>
    </Container>
  );
};
export default Board;
