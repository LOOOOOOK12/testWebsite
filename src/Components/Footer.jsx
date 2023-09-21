 import React from 'react'
 import facebook from "../assets/icons8-facebook-50 (1).png";
 import github from "../assets/icons8-github-50 (1).png";
 import instagram from "../assets/icons8-instagram-50.png";
 import linkedIn from "../assets/icons8-linkedin-50.png";
 import "../Styles/Footer.css"
 
 function Footer() {
   return (
    <div className='Footer'>
        <div className='left-Side'>
            <form>
                <input type="text" />
                <input type="text" />
                <button>Send Message!</button>
            </form>
        </div>
        <div className='right-Side'>
            <div className='Sites'>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={github} alt="" />
                <img src={linkedIn} alt="" />
            </div>  
            <div className='text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
    </div>
   )
 }
 
 export default Footer