import React from 'react'
import "../Css/home.css"

import imgFundoArvores from "../img/fundoInicialComImagem.png"

const Home = () => {
  return (
    <div>

        <h4>Breath Natureal</h4>

<img src={imgFundoArvores} alt="" className='imgArvore' />
<p className="principal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit illum repellat minima reiciendis ullam?<br/>
     Optio voluptates mollitia eveniet soluta dignissimos excepturi nulla itaque. Excepturi illum libero qui nesciunt labore.</p>


    </div>
  )
}

export default Home