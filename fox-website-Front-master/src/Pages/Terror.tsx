import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import WITCH from "../assets/filmComp/WITCH";

function Terrorpage(){
    return(

    <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
            <WITCH/>
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

export default Terrorpage