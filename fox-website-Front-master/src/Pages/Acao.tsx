import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import Avngrs from "../assets/filmComp/Avngrs";
import IndianaJonesARD from "../assets/filmComp/IndianaJonesARD";
import IndianaJonesCDAP from "../assets/filmComp/IndianaJonesCDAP";
import IndianaJonesRCC from "../assets/filmComp/IndianaJonesRCC";
import IndianaJonesTP from "../assets/filmComp/IndianaJonesTP";
import IndianaJonesUC from "../assets/filmComp/IndianaJonesUC";
import Matr from "../assets/filmComp/Matrix";
import StarWars3 from "../assets/filmComp/StarWars3";
import VDV from "../assets/filmComp/VDV";
import VelozesEF from "../assets/filmComp/VelozesEF";
import VelozesEFM from "../assets/filmComp/VelozesEFM";
import VelozesEFDT from "../assets/filmComp/VelozesEFDT";
import VelozesEF4 from "../assets/filmComp/VelozesEF4";
import VelozesEF5 from "../assets/filmComp/VelozesEF5";
import VelozesEF6 from "../assets/filmComp/VelozesEF6";
import VelozesEF7 from "../assets/filmComp/VelozesEF7";
import VelozesEF8 from "../assets/filmComp/VelozesEF8";
import VelozesEF9 from "../assets/filmComp/VelozesEF9";
import VelozesEF10 from "../assets/filmComp/VelozesEF10";


function Acaopage(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
            <Avngrs/>
            <IndianaJonesARD/>
            <IndianaJonesCDAP/>
            <IndianaJonesRCC/>
            <IndianaJonesTP/>
            <IndianaJonesUC/>
            <Matr/>
            <StarWars3/>
            <VDV/>
            <VelozesEF/>
            <VelozesEFM/>
            <VelozesEFDT/>
            <VelozesEF4/>
            <VelozesEF5/>
            <VelozesEF6/>
            <VelozesEF7/>
            <VelozesEF8/>
            <VelozesEF9/>
            <VelozesEF10/>
            
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

export default Acaopage