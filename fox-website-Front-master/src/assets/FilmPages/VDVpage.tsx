import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import "../FilmPages/VDVpage.css"
import varse from "../imgs/V-for-Vendetta-.jpg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function VDVpage(){

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
                <div className="PFtitulo"><p className="PFtitulo2">V De Vingança</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Em uma Inglaterra do futuro, onde está em vigor um regime totalitário, vive Evey Hammond (Natalie Portman).
                     Ela é salva de uma situação de vida ou morte por um homem mascarado, conhecido apenas pelo codinome V (Hugo Weaving), que é extremamente
                     carismático e habilidoso na arte do combate e da destruição. Ao convocar seus compatriotas a se rebelar contra a tirania e a opressão do
                     governo inglês, V provoca uma verdadeira revolução. Enquanto Evey tenta saber mais sobre o passado de V, ela termina por descobrir quem é
                      e seu papel no plano de seu salvador para trazer liberdade e justiça ao país.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="#acao" target="_blank">Ação</a>
                    <a href="#ficcao" target="_blank">Ficção Científica</a>
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

export default VDVpage