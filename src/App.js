// import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css';
// import { DatePicker } from 'antd';

import '../src/components/login';
import Login from '../src/components/login';
import ForgotPassword from '../src/components/forgotpass';
import ResetPassword from './components/resetpass';
import SignUp from './components/signup';
import CreateAgency from './components/agency';
import SignUpDark from './components/signupdark';
import LoginDark from './components/logindark';
import ResetPasswordDark from './components/resetpassdark';
import ForgotPasswordDark from './components/forgotpassdark';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      {/* <SignUp /> */}
      <SignUpDark />
      {/* <ResetPasswordDark /> */}
      {/* <ForgotPasswordDark /> */}
      {/* <LoginDark /> */}
      {/* <CreateAgency /> */}
    </div>
  );
}

export default App;
