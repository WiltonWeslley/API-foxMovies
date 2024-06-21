import star  from"../imgs/starating_1.png";
import mstar from"../imgs/meia-star.svg";
import photo from"../imgs/ClubeDaLutap.jpg";

function ClubeDaLuta(){
    return(
    <>

    <div className='itemsr1'>
            <a href="#Clube-Da-Luta">
            <img className='it1f' src={photo}/>
    <div className='des1'>
                <p className='tl1'>Clube Da Luta</p>
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

export default ClubeDaLuta