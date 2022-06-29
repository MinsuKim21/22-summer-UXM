import { Container } from '@mui/material';
import { useState } from 'react';
const Home = () => {
  const [curDate, setCurDate] = useState(new Date())
  const time = `${curDate.getUTCMonth()}월 ${curDate.getUTCDay()}일 보드`
  return (
    <Container>
      {time}
    </Container>
  );
};
export default Home;
