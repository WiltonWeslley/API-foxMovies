import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import BLR from "../assets/filmComp/BladRun";
import ClubeDaLuta from "../assets/filmComp/ClubeDaLuta";
import IdM from "../assets/filmComp/IdM";
import IRLND from "../assets/filmComp/IRLND";
import OPh from "../assets/filmComp/Openheimer";
import OSilencioDI from "../assets/filmComp/OSilencioDI";
import OsSuspeitos from "../assets/filmComp/OsSuspeitos";
import Seven from "../assets/filmComp/Seven";
import VelozesEF5 from "../assets/filmComp/VelozesEF5";



function Suspencepage(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
            <BLR/>
            <ClubeDaLuta/>
            <IdM/>
            <IRLND/>
            <OPh/>
            <OSilencioDI/>
            <OsSuspeitos/>
            <Seven/>
            <VelozesEF5/>
            
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

export default Suspencepage