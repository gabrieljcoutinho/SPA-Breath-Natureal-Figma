import React from 'react'
import logo from "../../src/img/IconeHeader.png"

import "../Css/header.css"

const Header = () => {
  return (
    <div className='teste'>
        <ul className='listaHeader'>
        <img src={logo} alt="" />
          <li><a href="#" className='linkHeader'>Home</a></li>
          <li><a href="#" className='linkHeader'>Plantys Type</a></li>
          <li><a href="#" className='linkHeader'>More</a></li>
          <li><a href="#" className='linkHeader'>Contact</a></li>
        </ul>

    </div>
  )
}

export default Header