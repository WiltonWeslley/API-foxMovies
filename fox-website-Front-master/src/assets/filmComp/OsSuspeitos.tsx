import star  from "../imgs/starating_1.png";
import mstar from "../imgs/stars.png";
import photo from"../imgs/OSsuspeitosp.jpg";

function OsSuspeitos(){
    return(
    <>

    <div className='itemsr1'>
            <a href="#/Os-Suspeitos">
            <img className='it1f' src={photo}/>
    <div className='des1'>
                <p className='tl1'>Os Suspeitos</p>
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

export default OsSuspeitos