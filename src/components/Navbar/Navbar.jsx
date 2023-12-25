import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
     <nav>
     <Link to={"/"}  className='nav-links'>Home</Link>
      <Link to={"/about"} className='nav-links'>About</Link>
      <Link to={"/blog"} className='nav-links'>Blog</Link>
     </nav>
    </div>
  )
}

export default Navbar
