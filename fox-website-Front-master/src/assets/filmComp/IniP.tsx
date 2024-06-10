import star  from"../imgs/stars.png";
import mstar from"../imgs/meia-star.svg";
import enemi from "../imgs/public-enemies.jpg";

function IniP(){
return(
    <>
<div className='itemsr1'>
    <a href="#Inimigos-Publicos">
              <img className='it1f' src={enemi}/>
              <div className='des1'>
                  <p className='tl1'>Inimigos Publicos</p>
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

export default IniP

