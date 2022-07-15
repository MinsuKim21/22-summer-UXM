import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

const BoardItem = (props) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="이미지 왜 안나와.."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.album}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.artistName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default BoardItem;
