import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import HarryPotterOF from "../assets/filmComp/HarryPotterOF";
import HarryPotterPF from "../assets/filmComp/HarryPotterPF";
import MARIO from "../assets/filmComp/MARIO";
import Shrek from "../assets/filmComp/Shrek";
import Shrek2 from "../assets/filmComp/Shrek2";
import ShrekPS from "../assets/filmComp/ShrekPS";




function Familiapage(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
           <HarryPotterOF/>
           <HarryPotterPF/>
           <MARIO/>
           <Shrek/>
           <Shrek2/>
           <ShrekPS/>

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

export default Familiapage