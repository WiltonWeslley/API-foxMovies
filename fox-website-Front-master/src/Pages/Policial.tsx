import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import AsB from "../assets/filmComp/AsB";
import IniP from "../assets/filmComp/IniP";
import OSilencioDI from "../assets/filmComp/OSilencioDI";
import OsSuspeitos from "../assets/filmComp/OsSuspeitos";
import PulpFict from "../assets/filmComp/PulpFict";
import Seven from "../assets/filmComp/Seven";
import VelozesEF from "../assets/filmComp/VelozesEF";
import VelozesEFDT from "../assets/filmComp/VelozesEFDT";

function Policiapage(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
            <AsB/>
            <IniP/>
            <OSilencioDI/>
            <OsSuspeitos/>
            <PulpFict/>
            <Seven/>
            <VelozesEF/>
            <VelozesEFDT/>
            
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

export default Policiapage