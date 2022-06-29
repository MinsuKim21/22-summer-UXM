import * as React from 'react';
import {
  Grid,
  Typography,
  Link,
  Button,
  TextField,
  Box,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const SignUp = () => {
  const [userType, setUserType] = React.useState('');

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h3">
          Sign Up
        </Typography>

        <TextField
          margin="normal"
          label="이름"
          required
          fullWidth
          autoComplete="email"
          autoFocus
        />

        <TextField
          margin="normal"
          label="이메일"
          required
          fullWidth
          autoComplete="email"
        />

        <TextField
          margin="normal"
          label="비밀번호"
          type="password"
          required
          fullWidth
          autoComplete="current-password"
        />

        <TextField
          margin="normal"
          label="비밀번호 확인"
          type="password"
          required
          fullWidth
          autoComplete="current-password"
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">유형</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userType}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>General</MenuItem>
            <MenuItem value={20}>Uproader</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          <b>다음</b>
        </Button>

        <Grid container>
          <Grid item xs>
            이미 계정이있으세요?
          </Grid>
          <Grid item>
            <Link>Sign in</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default SignUp;
