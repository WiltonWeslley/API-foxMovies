import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import IniP from "../assets/filmComp/IniP";
import IRLND from "../assets/filmComp/IRLND";
import MARIO from "../assets/filmComp/MARIO";
import Matr from "../assets/filmComp/Matrix";
import OPh from "../assets/filmComp/Openheimer";
import OPt from "../assets/filmComp/OP";
import OSilencioDI from "../assets/filmComp/OSilencioDI";
import OsSuspeitos from "../assets/filmComp/OsSuspeitos";
import ParaTodosOG from "../assets/filmComp/ParaTodosOG";
import ParaTodosOG3 from "../assets/filmComp/ParaTodosOG3";
import ParaTodosOGPS from "../assets/filmComp/ParaTodosOGPS";
import PulpFict from "../assets/filmComp/PulpFict";
import SenhorDosA from "../assets/filmComp/SenhorDosA";
import SenhorDosADT from "../assets/filmComp/SenhorDosADT";
import SenhorDosARDR from "../assets/filmComp/SenhorDosARDR";
import Seven from "../assets/filmComp/Seven";
import Shrek from "../assets/filmComp/Shrek";
import Shrek2 from "../assets/filmComp/Shrek2";
import Shrek3 from "../assets/filmComp/Shrek3";
import ShrekPS from "../assets/filmComp/ShrekPS";


function movies2(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
            
            <IniP/>
            <IRLND/>
            <MARIO/>
            <Matr/>
            <OPt/>
            <OPh/>
            <OSilencioDI/>
            <OsSuspeitos/>
            <ParaTodosOG/>
            <ParaTodosOGPS/>
            <ParaTodosOG3/>
            <PulpFict/>
            <SenhorDosA/>
            <SenhorDosADT/>
            <SenhorDosARDR/>
            <Seven/>
            <Shrek/>
            <Shrek2/>
            <Shrek3/>
            <ShrekPS/>

        </div>

        <div className="PMpP">
            <p>Paginas: <a href="#/movies">1</a>₪<a href="#/movies-2">2</a>₪<a href="#/movies-3">3</a>...</p>
        </div>
        
        <div className="PMfooter">
            <Footer/>
        </div>
        </div>
        </>

    )
}

export default movies2