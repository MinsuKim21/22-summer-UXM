import { Container } from '@mui/material';
import Loader from '../components/Loader';
// import { useState } from 'react';
const Home = () => {
  // const [curDate, setCurDate] = useState(new Date());
  // const time = `${curDate.getUTCMonth()}월 ${curDate.getUTCDay()}일 보드`;
  // let now = new Date(time);
  // const time = `${now.getUTCMonth()}월 ${now.getUTCDay()}일 `;
  return <Container>
    <Loader></Loader>
  </Container>;
};
export default Home;
