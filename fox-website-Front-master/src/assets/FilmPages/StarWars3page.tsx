import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/SW33p.webp";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function StarWars3page(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Star Wars: A Vingança dos Sith</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Em Star Wars: Episódio III, as Guerras Clônicas estão em pleno andamento e as diferenças entre o Conselho Jedi e o Chanceler Palpatine (Ian McDiarmid) aumentam cada vez mais. Anakin Skywalker (Hayden Christensen) mantém um elo de lealdade com Palpatine, ao mesmo tempo em que luta para que seu casamento com Padmé Amidala (Natalie Portman) não seja afetado por esta situação. Seduzido por promessas de poder, Anakin se aproxima cada vez mais de Darth Sidious (Ian McDiarmid) até se tornar o temível Darth Vader. Juntos eles tramam um plano para aniquilar de uma vez por todas com os cavaleiros jedi.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="" target="_blank">Ação</a>
                    <a href="" target="_blank">Aventura</a>
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

export default StarWars3page