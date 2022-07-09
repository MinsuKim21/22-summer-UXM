import { Box } from '@mui/material';
import { Container } from '@mui/system';
import BoardSide from '../../components/BoardSide'

const Library = () => {
  return (
    <Container sx={{ display: 'flex' }}>
      <Box>
        <BoardSide />
      </Box>
      <Box>이곳은 라이브러리.</Box>
    </Container>
  );
};
export default Library;
