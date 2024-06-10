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