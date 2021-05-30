import './App.css';
// import Equalizer from './Components/Equalizer/Equalizer';
import Footer from './Components/Footer/Footer';
// import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar'
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <h1>Hi welcome to the App!</h1>
      <NavBar/>
      {/* <Home/> */}
      {/* <Equalizer/> */}
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
