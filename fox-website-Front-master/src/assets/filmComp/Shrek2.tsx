import star  from"../imgs/stars.png";
import mstar from"../imgs/meia-star.svg";
import photo from"../imgs/SH2p.jpg";

function Shrek2(){
    return(
    <>

    <div className='itemsr1'>
            <a href="#Shrek2">
            <img className='it1f' src={photo}/>
    <div className='des1'>
                <p className='tl1'>Shrek 2</p>
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

export default Shrek2