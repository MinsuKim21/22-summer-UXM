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
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [userType, setUserType] = React.useState('');

  const handleChange = (event) => {
    setUserType(event.target.value);
  };
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const joinType = userType
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      checkPassword: data.get('checkPassword'),
      regiserType: joinType,
    });
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            label="이름"
            name="name"
            id="name"
            required
            fullWidth
            autoComplete="name"
            autoFocus
          />

          <TextField
            margin="normal"
            label="이메일"
            id="email"
            name="email"
            required
            fullWidth
            autoComplete="email"
          />

          <TextField
            margin="normal"
            label="비밀번호"
            id="password"
            type="password"
            name="password"
            required
            fullWidth
            autoComplete="current-password"
          />

          <TextField
            margin="normal"
            id="checkPassword"
            label="비밀번호 확인"
            type="password"
            name="checkPassword"
            required
            fullWidth
            autoComplete="current-password"
          />

          <FormControl fullWidth margin="normal">
            <InputLabel id="registerType">가입유형</InputLabel>
            <Select
              labelId="registerType"
              id="register-select"
              value={userType}
              required
              label="registerType"
              onChange={handleChange}
            >
              <MenuItem value={'General'}>General</MenuItem>
              <MenuItem value={'UpLoader'}>UpLoader</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            회원가입
          </Button>

          <Grid container>
            <Grid item xs>
              이미 계정이있으세요?
            </Grid>
            <Grid item>
              <Link
                onClick={() => {
                  Navigate('/login');
                }}
              >
                Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;
