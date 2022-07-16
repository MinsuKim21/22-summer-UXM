import { Container } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import BoardList from '../../components/BoardList';
import BoardSide from '../../components/BoardSide';

const Board = (props) => {
  return (
    <Container sx={{height: '100vh', mt: 2, display:'flex'}}>
      <Box width={"10%"}>
        <BoardSide />
      </Box>
      <Box width={"90%"}>
        <BoardList />
      </Box>
    </Container>
  );
};
export default Board;
