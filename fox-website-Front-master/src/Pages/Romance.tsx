import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import ParaTodosOG from "../assets/filmComp/ParaTodosOG";
import ParaTodosOGPS from "../assets/filmComp/ParaTodosOGPS";
import ParaTodosOG3 from "../assets/filmComp/ParaTodosOG3";




function Romancepage(){
    return(

    <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
            <ParaTodosOG/>
            <ParaTodosOGPS/>
            <ParaTodosOG3/>
        </div>

        {/*<div className="PMpP">
            <p>Paginas: <a href="#/movies">1</a>₪<a href="#/movies-2">2</a>₪<a href="#/movies-3">3</a>...</p>
        </div>*/}
        
        <div className="PMfooter">
            <Footer/>
        </div>
        </div>
    </>
)}

export default Romancepage