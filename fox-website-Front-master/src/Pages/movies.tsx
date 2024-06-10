import "./movies.css";
import Header from "../assets/Components/Header";
import AsB from "../assets/filmComp/AsB";
import Avngrs from "../assets/filmComp/Avngrs";
import Footer from "../assets/Components/Footer";
import DeVoltaPF from "../assets/filmComp/DeVoltaPF";
import ClubeDaLuta from "../assets/filmComp/ClubeDaLuta";
import BrilhoEDSL from "../assets/filmComp/BrilhoEDSL";
import BLR from "../assets/filmComp/BladRun";
import HarryPotterCF from "../assets/filmComp/HarryPotterCF";
import HarryPotterCS from "../assets/filmComp/HarryPotterCS";
import HarryPotterEP from "../assets/filmComp/HarryPotterEP";
import HarryPotterOF from "../assets/filmComp/HarryPotterOF";
import HarryPotterPA from "../assets/filmComp/HarryPotterPA";
import HarryPotterPF from "../assets/filmComp/HarryPotterPF";
import HarryPotterRM1 from "../assets/filmComp/HarryPotterRM1";
import HarryPotterRM2 from "../assets/filmComp/HarryPotterRM2";
import IdM from "../assets/filmComp/IdM";
import IndianaJonesARD from "../assets/filmComp/IndianaJonesARD";
import IndianaJonesCDAP from "../assets/filmComp/IndianaJonesCDAP";
import IndianaJonesRCC from "../assets/filmComp/IndianaJonesRCC";
import IndianaJonesTP from "../assets/filmComp/IndianaJonesTP";
import IndianaJonesUC from "../assets/filmComp/IndianaJonesUC";

function movies(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
           <AsB/>
           <Avngrs/>
           <BLR/>
           <BrilhoEDSL/>
           <ClubeDaLuta/>
           <DeVoltaPF/>
           <HarryPotterCF/>
           <HarryPotterCS/>
           <HarryPotterEP/>
           <HarryPotterOF/>
           <HarryPotterPA/>
           <HarryPotterPF/>
           <HarryPotterRM1/>
           <HarryPotterRM2/>
           <IdM/>
           <IndianaJonesARD/>
           <IndianaJonesCDAP/>
           <IndianaJonesRCC/>
           <IndianaJonesTP/>
           <IndianaJonesUC/>
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

export default movies