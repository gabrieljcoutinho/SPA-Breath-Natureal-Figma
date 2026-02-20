import React from 'react'
import logo from "../../src/img/IconeHeader.png"

import "../Css/header.css"

const Header = () => {
  return (
    <div className='teste'>
        <ul className='listaHeader'>
        <img src={logo} alt="" />
          <li><a href="#">Home</a></li>
          <li><a href="#">Plantys Type</a></li>
          <li><a href="#">More</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

    </div>
  )
}

export default Header