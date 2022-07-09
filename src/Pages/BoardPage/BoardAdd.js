import { Container,Box } from '@mui/material';
import BoardSide from '../../components/BoardSide';
const New = () => {
  return (
    <Container sx={{ display: 'flex' }}>
      <Box>
        <BoardSide />
      </Box>
      <Box>이곳은 보드 작성페이지.</Box>
    </Container>
  );
};
export default New;
