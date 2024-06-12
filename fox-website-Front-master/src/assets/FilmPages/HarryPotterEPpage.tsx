import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/HPEPp.jpg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function HarryPotterEPpage(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Harry Potter e o Enigma do Príncipe</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Lorde Voldemort (Ralph Fiennes) é uma ameaça real, tanto para o mundo dos bruxos quanto o dos trouxas. Harry Potter (Daniel Radcliffe) suspeita que o perigo esteja dentro da Escola de Magia e Bruxaria de Hogwarts, mas Alvo Dumbledore (Michael Gambon) está mais preocupado em prepará-lo para o confronto final com o Lorde das Trevas. Dumbledore convida seu colega Horácio Slughorn (Jim Broadbent) para ser o novo professor de Poções, já que Severo Snape (Alan Rickman) enfim alcançou o sonho de ministrar as aulas de Defesa Contra as Artes das Trevas. Paralelamente Harry começa a ter um interesse cada vez maior por Gina Weasley (Bonnie Wright), irmã de seu melhor amigo Rony (Rupert Grint), que também é alvo de interesse de Dino Thomas (Alfie Enoch).</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="#aventura" target="_blank">Aventura</a>
                    <a href="#fantasia" target="_blank">Fantasia</a>
                    
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

export default HarryPotterEPpage