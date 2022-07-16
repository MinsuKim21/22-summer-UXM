import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Slider(props) {
  const TOTAL_SLIDES = 2; // 전체 슬라이드 개수(총3개. 배열로 계산)
  const itemData = props.data;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);
  const style = {
    display: 'inline-block',
    width: '',
  };
  return (
    <Container>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton component="label" color="primary" onClick={PrevSlide}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton component="label" color="primary" onClick={NextSlide}>
          <ArrowForwardIosIcon />{' '}
        </IconButton>
      </Box>
      <SliderContainer ref={slideRef}>
        {itemData.map((item) => {
          return (
            <BoardItem
              style={style}
              img={item.img}
              album={item.album}
              artistName={item.artistName}
            />
          );
        })}
      </SliderContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  // position: absolute;
  display: flex;
`;
