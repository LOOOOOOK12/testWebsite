import React from 'react';
import "../Styles/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className='Logo'>
          <h1>LOOOOOOK</h1>
      </div>
        <ul className='Links'>
          <a href="#Home"><li>Home</li></a>
          <a href="#About"><li>About us</li></a>
          <a href="#Services"><li>Services</li></a>
          <a href="#Contacts"><li>Contacts</li></a>
        </ul> 
    </div>
  )
}

export default NavBar