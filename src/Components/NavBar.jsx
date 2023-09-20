import React from 'react';
import "../Styles/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className='Logo'>
          <h1>LOOOOOOK</h1>
      </div>
        <ul className='Links'>
          <a href=""><li>Home</li></a>
          <a href=""><li>About us</li></a>
          <a href=""><li>Services</li></a>
          <a href=""><li>Contacts</li></a>
        </ul> 
    </div>
  )
}

export default NavBar