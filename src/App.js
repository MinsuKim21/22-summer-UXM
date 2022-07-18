import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader2';
import Main from './Pages/Main';
import Library from './Pages/BoardPage/Library';
import Board from './Pages/BoardPage/BoardMain';
import New from './Pages/BoardPage/BoardAdd';
import LoginForm from './Pages/LoginPage/LoginForm';
import SignUp from './Pages/LoginPage/SignUpForm';

// import RouteTest from './components/RouteTest';
// import LoginForm from './LoginPage/LoginForm';
// import SignUp from './Page/LoginPage/SignUpForm';
// import MyBtn from './myBtn';
// import TextField from '@mui/material/TextField';s
// import Checkbox from '@mui/material/Checkbox';
// import Button from '@mui/material/Button';
function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/home" element={<Board />} />
        <Route path="/new" element={<New />} />
        <Route path="/library" element={<Library />} />
        <Route path="/board/:id" element={<Board />} />
        <Route path="/board" element={<Board />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
