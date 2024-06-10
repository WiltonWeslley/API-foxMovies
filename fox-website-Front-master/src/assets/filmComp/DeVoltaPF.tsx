import star  from"../imgs/stars.png";
import mstar from"../imgs/meia-star.svg";
import photo from"../imgs/DeVoltaPFp.webp";

function DeVoltaPF(){
    return(
    <>

    <div className='itemsr1'>
            <a href="#De-Volta-para-o-Futuro">
            <img className='it1f' src={photo}/>
    <div className='des1'>
                <p className='tl1'>De Volta para o Futuro</p>
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

export default DeVoltaPF