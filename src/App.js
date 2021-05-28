import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <h1>Hi welcome to the App!</h1>
      <NavBar/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
