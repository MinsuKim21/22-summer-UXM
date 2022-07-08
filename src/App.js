import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Home from './Page/Main';
import Board from './Page/BoardPage/BoardMain';
import Edit from './Page/BoardPage/BoardEdit';
import New from './Page/BoardPage/BoardAdd';
import LoginForm from './Page/LoginPage/LoginForm';
import SignUp from './Page/LoginPage/SignUpForm';

// import RouteTest from './components/RouteTest';
// import LoginForm from './LoginPage/LoginForm';
// import SignUp from './Page/LoginPage/SignUpForm';
// import MyBtn from './myBtn';
// import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
// import Button from '@mui/material/Button';
function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/board/:id" element={<Board />} />
        <Route path="/board" element={<Board />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
