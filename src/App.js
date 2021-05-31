import './App.css';
import Account from './Components/Account/Account';
// import Equalizer from './Components/Equalizer/Equalizer';
// import Footer from './Components/Footer/Footer';
// import ChangePass from './Components/ForgotPassword/NewPass/NewPass';
// import ForgotPass from './Components/ForgotPass/ForgotPass';
// import Home from './Components/Home/Home';
// import NavBar from './Components/NavBar/NavBar'
import SideBar from './Components/SideBar/SideBar';
// import Video from './Components/Video/Video';
// import Otp from './Components/ForgotPassword/Otp/Otp';
// import SignIn from './Components/SignIn/SignIn';
// import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      {/* <Home/> */}
      {/* <Equalizer/> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <ForgotPass/> */}
      {/* <Otp/> */}
      {/* <ChangePass/> */}
      <SideBar/>
      <Account/>
      {/* <Video/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
