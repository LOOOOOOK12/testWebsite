import "../Styles/NavBar.css";


function NavBar() {
  return (
    <div className="navBar">
        <div className='Logo'>
            <h1>LOOOOOOK</h1>
        </div>
        <div className='Links'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar