import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/SW1p.jpg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function StarWars1page(){

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        handleGetUsers();
      }, []);
    
      const handleGetUsers = async () => {
        const res = await axios.get(`${V3X_API}/users`);
    
        setUsers(res.data);
      };



    return(
        <>  
        <div className="PFm">
                  <div className="PFheader">
            <Header/>
                 </div>
             <div className="PFcont">
                <div className="PFcont1">
                <div className="PFposter"><img className="PFposter2" src={varse}/></div>
                    <div className="PFcont2">
                <div className="PFtitulo"><p className="PFtitulo2">Star Wars: A Ameaça Fantasma</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Em Star Wars: Episódio I, quando a maquiavélica Federação Comercial planeja invadir o pacífico planeta Naboo, o guerreiro Jedi Qui-Gon Jinn (Liam Neeson) e seu aprendiz Obi-Wan Kenobi (Ewan McGregor) embarcam em uma aventura para tentar salvar o planeta. Viajam com eles a jovem Rainha Amidala (Natalie Portman), que é visada pela Federação pois querem forçá-la a assinar um tratado político. Eles têm de viajar para os distantes planetas Tatooine e Coruscant em uma desesperada tentativa de salvar o mundo de Darth Sidious (Ian McDiarmid), o demoníaco líder da Federação que sempre surge em imagens tridimensionais (a ameaça fantasma). Durante a viagem, Qui-Gon Jinn conhece um garoto de nove anos que deseja treiná-lo para ser tornar um Jedi, pois o menino tem todas as qualidades para isto. Mas o tempo revelará que nem sempre as coisas são o que aparentam.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="" target="_blank">Aventura</a>
                    <a href="" target="_blank">Fantasia</a>
                    <a href="" target="_blank">Ficção Científica</a>
                </div>
                <div className="PFplayer">
                    <p>PLayers</p>
                    <div className="PFplayer2">
                    <button className="PFplayerl">Legendado</button>
                    <button className="PFplayerd">Dublado</button>
                    </div>
                </div>
                </div>
             </div>
             <div className="PFcomentario">
             {users.map((user) => (
                <div key={user.id} className='PFcomentario2'>
                  <img className="PFCfoto" src={PFCfoto}/>
                  <div className="PFcomentarios2">
                  <p className='td1' style={{ width: "300px" }}>{user.nome}</p>
                  <p className='td3' style={{ width: "300px" }}>{user.comentario}</p>
                </div>
                </div>
            ))}
            </div>
            <div className="PFfooter">
                <Footer/>
            </div>
        </div>
     </>
)}

export default StarWars1page