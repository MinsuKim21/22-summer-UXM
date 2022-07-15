import { Container, Box } from '@mui/material';
// import { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { DataGrid } from '@mui/x-data-grid';
import BoardItem from './BoardItem';
const BoardList = () => {
  const itemData = [
    {
      id: 1,
      img: '/images/test1.png',
      songName:'곡제목',
      album: '엘범제목',
      artistName: '생산자',
    },
    {
      id: 2,
      img: '/images/test2.png',
      songName:'곡제목',
      album: '엘범제목',
      artistName: '생산자',
    },
    {
      id: 3,
      img: '/images/test3.png',
      songName:'곡제목',
      album: '엘범제목',
      artistName: '생산자',
    },
    {
      id: 4,
      img: '/images/test1.png',
      songName:'곡제목',
      album: '엘범제목',
      artistName: '생산자',
    },
    {
      id: 5,
      img: '/images/test1.png',
      songName:'곡제목',
      album: '엘범제목',
      artistName: '생산자',
    },
    {
      id: 6,
      img: '/images/test2.png',
      songName:'곡제목',
      album: '엘범제목',
      artistName: '생산자',
    },
    {
      id: 7,
      img: '/images/test3.png',
      songName:'곡제목',
      album: '엘범제목',
      artistName: '생산자',
    },
    {
      id: 8,
      img: '/images/test1.png',
      songName:'곡제목',
      album: '엘범제목',
      artistName: '생산자',
    },
  ];

  const columns =[
    {
      field: 'songName',
      headerName: '곡제목',
      width: 110,
      editable: true,
    },
    {
      field: 'album',
      headerName: 'Album',
      width: 150,
      editable: true,
    },
    {
      field: 'artistName',
      headerName: 'Artist Name',
      width: 150,
      editable: true,
    },
  ]

  return (
    <Container >
      <Box sx={{ width: '100%', minHeight: 150, display: 'flex' }}>
        {itemData.map((item) => {
          return (
            <BoardItem
              img={item.img}
              album={item.album}
              artistName={item.artistName}
            ></BoardItem>
          );
        })}
      </Box>

      <Box sx={{height:400, width:'100%'}}>
        <DataGrid
          rows={itemData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </Container>
  );
};
export default BoardList;
