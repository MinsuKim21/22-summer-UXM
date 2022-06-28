import {
  Grid,
  Typography,
  Link,
  Button,
  TextField,
  Box,
  Container,
} from '@mui/material';

const SignUp = () => {
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
