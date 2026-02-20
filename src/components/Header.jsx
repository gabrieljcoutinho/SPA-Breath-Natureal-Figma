import React from 'react'
import logo from "../../src/img/IconeHeader.png"

import "../Css/header.css"

const Header = () => {
  return (
    <div className='teste'>
              <img src={logo} alt=""  className='linkHeader' />
        <ul className='listaHeader'>
          <li className='li-linkHeader'><a href="#" className='linkHeader'>Home</a></li>
          <li className='li-linkHeader'><a href="#" className='linkHeader'>Plantys Type</a></li>
          <li className='li-linkHeader'><a href="#" className='linkHeader'>More</a></li>
          <li className='li-linkHeader'><a href="#" className='linkHeader'>Contact</a></li>
        </ul>

    </div>
  )
}

export default Header