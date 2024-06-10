import star  from"../imgs/stars.png";
import mstar from"../imgs/meia-star.svg";
import rastro from "../imgs/sem-rastro.jpg";

function SRs(){
    return(
    <>
        <div className='itemsr1'>
            <a href="#Sem-Rastros">
            <img className='it1f' src={rastro}/>
        <div className='des1'>
                <p className='tl1'>Sem Rastros</p>
        <div className='imdb'>
                  <p>4,5</p>
        <div className='sti'>
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
    
    )}


export default SRs