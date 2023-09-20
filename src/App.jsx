import React from 'react';
import "./App.css";
import Home from './Pages/Home';
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Services from "./Pages/Services";
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Home/>
      <About/> 
      <Services/>
      <Contacts/>
    </div>
  )
}

export default App;
