import React from 'react'
import "../Css/home.css"

import imgFundoArvores from "../img/fundoInicialComImagem.png"

import plantBuyNow from "../img/plantBuyNow.png"

const Home = () => {
  return (
    <div>

        <h4>Breath Natureal</h4>

<img src={imgFundoArvores} alt="" className='imgArvore' />
<p className="paragrafoPrincipal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit illum repellat minima reiciendis ullam?<br/>
     Optio voluptates mollitia eveniet soluta dignissimos excepturi nulla itaque. Excepturi illum libero qui nesciunt labore.</p>


      <div className="buyPlant">
        <img src={plantBuyNow} alt="" className='imgComprarImgPrincipal' />
            <p>Trendy House Plant</p>
            <h2>Calathea Plant</h2>
            <button>Buy Now</button>
      </div>

    </div>
  )
}

export default Home