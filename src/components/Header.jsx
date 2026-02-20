import React from 'react'
import logo from "../../src/img/IconeHeader.png"

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="" />

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Plantys Type</a></li>
          <li><a href="#">More</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

    </div>
  )
}

export default Header