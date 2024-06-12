import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import Avngrs from "../assets/filmComp/Avngrs";
import BLR from "../assets/filmComp/BladRun";
import BrilhoEDSL from "../assets/filmComp/BrilhoEDSL";
import DeVoltaPF from "../assets/filmComp/DeVoltaPF";
import Matr from "../assets/filmComp/Matrix";
import OPt from "../assets/filmComp/OP";
import StarWars1 from "../assets/filmComp/StarWars1";
import StarWars2 from "../assets/filmComp/StarWars2";
import StarWars3 from "../assets/filmComp/StarWars3";
import StarWars4 from "../assets/filmComp/StarWars4";
import StarWars5 from "../assets/filmComp/StarWars5";
import StarWars6 from "../assets/filmComp/StarWars6";
import VDV from "../assets/filmComp/VDV";


function Ficcaopage(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
            <Avngrs/>
            <BLR/>
            <BrilhoEDSL/>
            <DeVoltaPF/>
            <Matr/>
            <OPt/>
            <StarWars1/>
            <StarWars2/>
            <StarWars3/>
            <StarWars4/>
            <StarWars5/>
            <StarWars6/>
            <VDV/>
            
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

export default Ficcaopage