import star  from"../imgs/stars.png";
import mstar from"../imgs/meia-star.svg";
import arch from "../imgs/archive.jpeg";

function OPt(){
    return(
<>
        <div className='itemsr1'>
            <a href="#O-Prototipo">
                <img className='it1f' src={arch}/>
        <div className='des1'>
                    <p className='tl1'>O Protótipo</p>
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
            )
    
}

export default OPt