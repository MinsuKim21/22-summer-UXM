import { Container } from '@mui/material';
import { Box } from '@mui/system';
// import { Box } from '@mui/system';
import * as React from 'react';
import BoardItem from '../../components/BoardItem';
import BoardSide from '../../components/BoardSide';

const Board = (props) => {
  const music = [
    {
      name: '음악이름1',
      image:
        '',
    },
    // {
    //   name: '음악이름2',
    //   image: '이미지 주소2',
    // },
    // {
    //   name: '음악이름3',
    //   image: '이미지 주소3',
    // },
  ];
  return (
    <Container sx={{ display: 'flex' }}>
      <Box>
        <BoardSide />
      </Box>
      <Box display="flex">
        <Box>
          {music.map((music) => {
            return <BoardItem name={music.name} image={music.image} />;
          })}
        </Box>
      </Box>
    </Container>
  );
};
export default Board;
