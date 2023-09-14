import "./App.css";
import Home from './Pages/Home';
import About from "./Pages/About";
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
