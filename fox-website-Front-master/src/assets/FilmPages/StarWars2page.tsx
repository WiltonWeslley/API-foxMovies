import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/SW2p.webp";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function StarWars2page(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Star Wars: Ataque dos Clones</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Em Star Wars: Episódio 2, dez anos após a tentativa frustrada de invasão do planeta Naboo, Obi-Wan Kenobi (Ewan McGregor), Anakin Skywalker (Hayden Christensen) e Padmé Amidala (Natalie Portman) estão juntos novamente. Neste período de tempo Obi-Wan passou de aprendiz a professor dos ensinamentos jedi para Anakin, sendo que ambos foram destacados para proteger a agora senadora Amidala, que tem sua vida ameaçada por facções separatistas da República, que ameaçam desencadear uma guerra civil intergalática. Com o passar do tempo surge um romance proibido entre Anakin e Amidala, pois os cavaleiros jedi não têm permissão para se apaixonarem.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="" target="_blank">Aventura</a>
                    <a href="" target="_blank">Fantasia</a>
                    <a href="" target="_blank">Ficação Científica</a>
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

export default StarWars2page