import star  from"../imgs/stars.png";
import mstar from"../imgs/meia-star.svg";
import photo from"../imgs/HPPFp.jpg";

function HarryPotterPF(){
    return(
    <>

    <div className='itemsr1'>
            <a href="#Harry-Potter-e-a-Pedra-Filosofal">
            <img className='it1f' src={photo}/>
    <div className='des1'>
                <p className='tl1'>Harry Potter e a Pedra Filosofal</p>
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

export default HarryPotterPF