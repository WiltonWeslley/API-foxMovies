import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import MARIO from "../assets/filmComp/MARIO";
import Shrek from "../assets/filmComp/Shrek";
import Shrek2 from "../assets/filmComp/Shrek2";
import Shrek3 from "../assets/filmComp/Shrek3";
import ShrekPS from "../assets/filmComp/ShrekPS";

function Animacaopage(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
        <MARIO/>
        <Shrek/>
        <Shrek2/>
        <Shrek3/>
        <ShrekPS/>
            
        </div>

        {/*<div className="PMpP">
            <p>Paginas: <a href="#/movies">1</a>₪<a href="#/movies-2">2</a>₪<a href="#/movies-3">3</a>...</p>
        </div>*/}
        
        <div className="PMfooter">
            <Footer/>
        </div>
        </div>
        </>

    )
}

export default Animacaopage