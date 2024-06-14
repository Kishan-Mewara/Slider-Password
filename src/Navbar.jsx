import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="nav_container">
  <div className="logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Nyumbani_Hotel_Logo.png"/>
    <p>Logo</p>
  </div>
  <div className="menu">
    <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li> <Link to='/AboutUs'> About Us</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>SignUp</Link></li>
                    <li><Link to='/Addtocart'>Cart</Link></li>
                    <li><Link to='/Productdetail'>Productdetail </Link></li>
                </ul>
  </div>
  <div className="search">
    <input type="text" placeholder="enter keyword"/>
  </div>
  
</div>

        </>
    )

}

export default Navbar
