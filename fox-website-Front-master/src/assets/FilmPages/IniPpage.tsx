import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import enemi from "../imgs/public-enemies.jpg";
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
                <div className="PFposter"><img className="PFposter2" src={enemi}/></div>
                    <div className="PFcont2">
                <div className="PFtitulo"><p className="PFtitulo2">Inimigos Públicos</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">John Dillinger (Johnny Depp) era um criminoso audacioso e violento, mas que atraía a opinião pública ao seu favor, principalmente, porque dizia retirar das instituições financeiras o dinheiro que elas roubavam do cidadão. Seus assaltos a bancos e fugas rápidas enlouqueciam a polícia que não tinha condições de enfrentá-lo. Assim, prender o assaltante tornou-se uma obsessão do então burocrata J. Edgar Hoover (Billy Crudup), que disposto a tudo para fortalecer o famoso F.B.I., coloca Dillinger como o inimigo público número um. Para ajudar em sua missão, Hoover contrata o policial Melvin Purvis (Christian Bale) e o deixa igualmente obcecado pela captura do bandido, que se apaixona por Billie Frechetti (Marion Cotillard) e acaba complicando a sua vida.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="#biografia" target="_blank">Biografia</a>
                    <a href="#drama" target="_blank">Drama</a>
                    <a href="#policial" target="_blank">Policial</a>
                    
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