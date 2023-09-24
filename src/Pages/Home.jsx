import React from 'react';
import "../Styles/Home.css";
import Background from "../assets/pexels-arkkrapol-anantachote-1571746.jpg";


function Home() {

  return (
    <div className ="Home" id='Home' style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0,0,0,0)),url(${Background})`,
      backgroundSize: `cover`
    }}> 
      <div className='Container-1'>
        <h1>Wonderful Japan!</h1>
        <button>Let's Dive In!</button>
      </div>
      <div className='Container-2'>
        <h2>Lorem ipsum dolor sit!</h2>
      </div>        
    </div>
  )
}

export default Home