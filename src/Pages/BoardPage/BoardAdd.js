import { Container, Box} from '@mui/material';
import BoardSide from '../../components/BoardSide';
const New = () => {
  return (
    <Container sx={{ height: '100vh', mt: 2, display: 'flex' }}>
      <Box width={'10%'}>
        <BoardSide />
      </Box>
      <Box width={'90%'}>
        fadsfasd
      </Box>
    </Container>
  );
};
export default New;
