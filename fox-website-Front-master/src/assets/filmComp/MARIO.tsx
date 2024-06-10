import star  from"../imgs/stars.png";
import mstar from"../imgs/meia-star.svg";
import mario from "../imgs/The_Super_Mario_Bros._Movie_poster.jpg";

function MARIO(){
    return(
    <>
<div className='itemsr1'>
      <a href="#Super-Mario">
              <img className='it1f' src={mario}/>
              <div className='des1'>
                  <p className='tl1'>Super Mario Bros</p>
                  <div className='imdb'>
                  <p>4,3</p>
                    <div className='sti'>
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

export default MARIO