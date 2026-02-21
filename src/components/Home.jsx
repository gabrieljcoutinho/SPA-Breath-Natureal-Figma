import React from 'react'
import "../Css/home.css"

import imgFundoArvores from "../img/fundoInicialComImagem.png"
import plantBuyNow from "../img/plantBuyNow.png"
import userComentario from "../img/userComentario.png"
import starAvaliacaoUser from "../img/star.png"
import imgPromocao from "../img/plantaPromocao.png"

const Home = () => {
  return (
    <div>

        <h4>Breath Natureal</h4>

<img src={imgFundoArvores} alt="" className='imgArvore' />
<p className="paragrafoPrincipal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit illum repellat minima reiciendis ullam?<br/>
     Optio voluptates mollitia eveniet soluta dignissimos excepturi nulla itaque. Excepturi illum libero qui nesciunt labore.</p>


      <div className="buyPlant">
      <img src={plantBuyNow} alt="" className='imgComprarImgPrincipal' />
           <div className="movimetnacaoConteudoDentroDiv">
           <p>Trendy House Plant</p>
            <h2>Calathea Plant</h2>

          <div className="movimetnaçãoBtn">
          <button>Buy Now</button>
          </div>

           </div>
      </div>

      <div className="comentario">
            <ul className="imgEnome">
            <img src={userComentario} alt="" />
            <h2 className='tituloUser'>User</h2>
            </ul>
         <ul className="avaliacaoUser">
         <img src={starAvaliacaoUser} alt="" className='imgStar' />
            <img src={starAvaliacaoUser} alt="" className='imgStar' />
            <img src={starAvaliacaoUser} alt="" className='imgStar' />
            <img src={starAvaliacaoUser} alt="" className='imgStar' />
         </ul>
            <p className='comentarioUser'>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Laudantium porro quod
              quibusdam labore illo exercitationem aut.
              </p>
      </div>
      <br /><br /><br /><br /><br />

      <div className="promocaoPlanta">
        <img src={imgPromocao} alt="" className='imgPromocao' />
        <div className="conteudo"></div>
      </div>

    </div>
  )
}

export default Home