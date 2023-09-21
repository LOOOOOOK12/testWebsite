import React from 'react';
import "./App.css";
import Home from './Pages/Home';
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Services from "./Pages/Services";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Contacts />
      <Footer/>
    </div>
  )
}

export default App;
