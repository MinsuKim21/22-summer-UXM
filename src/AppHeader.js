import { Box, Container, Typography } from '@mui/material';
import MyBtn from './myBtn';

const AppHeader = () => {
  return (
    <Container
      fontWeight={'fontWeightMedium'}
      style={{ display: 'flex', backgroundColor: 'blue' }}
    >
      <Box justifyContent="start" width="25%">
        <MyBtn
          text={'Login'}
          onClick={() => alert('버튼클릭')}
          type={'login'}
        />
        <MyBtn
          text={'Sign up'}
          onClick={() => alert('버튼클릭')}
          type={'signup'}
        />
      </Box>
      <Box justifyContent="center" width="50%" textAlign="center">
        <Typography component="h1" variant="h3">
          UXM LAB Music
        </Typography>
      </Box>
      <Box justifyContent="end" width="25%">
        <MyBtn text={'default'} onClick={() => alert('버튼클릭')} />
      </Box>
    </Container>
  );
};
export default AppHeader;
