import star  from"../imgs/stars.png";
import mstar from"../imgs/meia-star.svg";
import photo from"../imgs/PTOGp.webp";

function ParaTodosOG(){
    return(
    <>

    <div className='itemsr1'>
            <a href="#Para-Todos-os-Garotos-que-Ja-Amei">
            <img className='it1f' src={photo}/>
    <div className='des1'>
                <p className='tl1'>Para Todos os Garotos que Já Amei</p>
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

export default ParaTodosOG