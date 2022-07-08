import { Box, Container, Typography } from '@mui/material';
import {TailSpin} from 'react-loader-spinner';
const Loader = () => {
  return (
    <Container>
      <Box
        sx={{
          position: 'fixed',
          width: 1 / 2,
          height: 1 / 2,
          transform: 'translate(-50%,-50%)',
        }}
      >
        <Typography component="h2" variant="h2">
          창을 닫지 말아주세요.
        </Typography>
        <TailSpin color="#00BFFF" height={80} width={80} />
      </Box>
    </Container>
  );
};
export default Loader;
