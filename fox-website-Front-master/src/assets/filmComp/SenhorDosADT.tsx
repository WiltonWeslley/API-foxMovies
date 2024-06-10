import star  from"../imgs/stars.png";
import mstar from"../imgs/meia-star.svg";
import photo from"../imgs/SDADTp.webp";

function SenhorDosADT(){
    return(
    <>

    <div className='itemsr1'>
            <a href="#Senhor-dos-Aneis-As-Duas-Torres">
            <img className='it1f' src={photo}/>
    <div className='des1'>
                <p className='tl1'>O Senhor dos Anéis - As Duas Torres</p>
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

export default SenhorDosADT