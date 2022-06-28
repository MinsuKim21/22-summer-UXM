import { BrowserRouter } from 'react-router-dom';
import AppHeader from './AppHeader';
import Home from './Page/Home';
import Board from './Page/Board';
import Edit from './Page/Edit';
import New from './Page/New';
// import LoginForm from './LoginPage/LoginForm';
// import SignUp from './Page/LoginPage/SignUpForm';
// import MyBtn from './myBtn';
// import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
// import Button from '@mui/material/Button';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
