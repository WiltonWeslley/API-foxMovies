import "./mainPage.css";
import Footer from '../assets/Components/Footer';
import Header from '../assets/Components/Header';
import Recomends from '../assets/Components/Recomends';
import Sobre from '../assets/Components/sobre';
import Carsel from "../assets/Components/Carrosel";
import { useEffect, useState } from "react";
import axios from "axios";
import Filme from "../assets/Interfaces/Filmes";
import { V3X_API } from "../API.utilite/URL.API";


function MainPage(){
  const [/*filmes*/, setFilmes] = useState<Filme[]>([]);
  
  useEffect(() => {
    axios.get(`${V3X_API}/filmes`).then((res) => {
      setFilmes(res.data)
    }).catch((err) => {
      alert(err);
    })
  }, [])

  return(
    <div className='container'>
    <Header/>
    <div className="carsel">
    <Carsel/>
    </div>
    <Recomends /*filmes={filmes}*//>
    <Sobre/>
    <Footer/>
    </div>
  )
}

export default MainPage