import star  from "../imgs/starating_1.png";
import mstar from "../imgs/stars.png";
import varse from "../imgs/V-for-Vendetta-.jpg";




function VDV(){
    return(
        <>
          
            <div className='itemsr1'>
              <a href="#/V-de-Vingança">
              <img className='it1f' src={varse}/>
              <div className='des1'>
                  <p className='tl1'>V-de-Vingança</p>
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
    
export default VDV