import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import BrilhoEDSL from "../assets/filmComp/BrilhoEDSL";
import ClubeDaLuta from "../assets/filmComp/ClubeDaLuta";
import HarryPotterOF from "../assets/filmComp/HarryPotterOF";
import IniP from "../assets/filmComp/IniP";
import OSilencioDI from "../assets/filmComp/OSilencioDI";
import ParaTodosOG3 from "../assets/filmComp/ParaTodosOG3";
import PulpFict from "../assets/filmComp/PulpFict";



function Dramapage(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
            <BrilhoEDSL/>
            <ClubeDaLuta/>
            <HarryPotterOF/>
            <IniP/>
            <OSilencioDI/>
            <ParaTodosOG3/>
            <PulpFict/>
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

export default Dramapage