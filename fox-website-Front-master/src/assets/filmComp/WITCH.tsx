import star  from "../imgs/starating_1.png";
import mstar from "../imgs/stars.png";
import witch from "../imgs/a-bruxa-thewitch-poster.jpg";


function WITCH(){
    return(
    <>
          <div className='itemsr1'>
            <a href="#/A-Bruxa">
              <img className='it1f' src={witch}/>
              <div className='des1'>
                  <p className='tl1'>A bruxa&nbsp;&nbsp;&nbsp;</p>
                  <div className='imdb'>
                  <p>4,5</p>
                    <div className='sti'>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={mstar}/>
                    </div>
                  </div>
              </div>
              </a>
            </div>
        </>
        )
}

export default WITCH