import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import HarryPotterCF from "../assets/filmComp/HarryPotterCF";
import HarryPotterCS from "../assets/filmComp/HarryPotterCS";
import HarryPotterEP from "../assets/filmComp/HarryPotterEP";
import HarryPotterOF from "../assets/filmComp/HarryPotterOF";
import HarryPotterPA from "../assets/filmComp/HarryPotterPA";
import HarryPotterPF from "../assets/filmComp/HarryPotterPF";
import HarryPotterRM1 from "../assets/filmComp/HarryPotterRM1";
import HarryPotterRM2 from "../assets/filmComp/HarryPotterRM2";



function Dramapage(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
            <HarryPotterCF/>
            <HarryPotterCS/>
            <HarryPotterEP/>
            <HarryPotterOF/>
            <HarryPotterPA/>
            <HarryPotterPF/>
            <HarryPotterRM1/>
            <HarryPotterRM2/>
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