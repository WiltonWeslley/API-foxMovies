import "./movies.css";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";
import SonhodL from "../assets/filmComp/SonhodL";
import SRs from "../assets/filmComp/SR";
import StarWars1 from "../assets/filmComp/StarWars1";
import StarWars2 from "../assets/filmComp/StarWars2";
import StarWars3 from "../assets/filmComp/StarWars3";
import StarWars4 from "../assets/filmComp/StarWars4";
import StarWars5 from "../assets/filmComp/StarWars5";
import StarWars6 from "../assets/filmComp/StarWars6";
import VDV from "../assets/filmComp/VDV";
import VelozesEF from "../assets/filmComp/VelozesEF";
import VeloresEFM from "../assets/filmComp/VelozesEFM";
import VeloresEFDT from "../assets/filmComp/VelozesEFDT";
import VeloresEF4 from "../assets/filmComp/VelozesEF4";
import VeloresEF5 from "../assets/filmComp/VelozesEF5";
import VeloresEF6 from "../assets/filmComp/VelozesEF6";
import VelozesEF7 from "../assets/filmComp/VelozesEF7";
import VelozesEF8 from "../assets/filmComp/VelozesEF8";
import VelozesEF9 from "../assets/filmComp/VelozesEF9";
import VelozesEF10 from "../assets/filmComp/VelozesEF10";
import WITCH from "../assets/filmComp/WITCH";


function movies3(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
            <SonhodL/>
            <SRs/>
            <StarWars1/>
            <StarWars2/>
            <StarWars3/>
            <StarWars4/>
            <StarWars5/>
            <StarWars6/>
            <VDV/>
            <VelozesEF/>
            <VeloresEFM/>
            <VeloresEFDT/>
            <VeloresEF4/>
            <VeloresEF5/>
            <VeloresEF6/>
            <VelozesEF7/>
            <VelozesEF8/>
            <VelozesEF9/>
            <VelozesEF10/>
            <WITCH/>

    

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

export default movies3