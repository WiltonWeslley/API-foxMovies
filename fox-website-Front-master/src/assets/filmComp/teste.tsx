import star  from"../imgs/stars.png";
import mstar from"../imgs/meia-star.svg";
/*import { useEffect, useState } from "react";
import  axios  from "axios";*/


  export interface img{
    imagem: string;
  }


interface Prop{
  id?: number,
  nome: string,
  imagem: string,
  descricao?: string,
  generos?: string,
  complementos?: string;
  link?: string;
}

function Test({nome, imagem, link} : Prop){
  return(
  <>
  

    <div className='itemsr1'>
      <a href={link}>
            
        <img src={imagem}/>
            
          <div className='des1'>
            
              <p className='tl1'>{nome}</p>
            
            <div className='imdb'>
                
                <p>4,5</p>
              
              <div className='sti'>
                <img className='st1' src={star}/>
                <img className='st1' src={star}/>
                <img className='st1' src={star}/>
                <img className='st1' src={star}/>
                <img className='st2' src={mstar}/>
              </div>

            </div>

          </div>

        </a>

    </div>
  </>

)}

export default Test