import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import Avngrs from "../assets/filmComp/Avngrs";
import BLR from "../assets/filmComp/BladRun";
import BrilhoEDSL from "../assets/filmComp/BrilhoEDSL";
import DeVoltaPF from "../assets/filmComp/DeVoltaPF";
import Matr from "../assets/filmComp/Matrix";
import OPt from "../assets/filmComp/OP";


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