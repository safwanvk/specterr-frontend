import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <h1>Hi welcome to the App!</h1>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
