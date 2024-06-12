import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/BrilhoEDSLp.webp";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function BrilhoEDSLpage(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Brilho Eterno de uma Mente Sem Lembranças</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Joel (Jim Carrey) e Clementine (Kate Winslet) formavam um casal que durante anos tentaram fazer com que o relacionamento desse certo. Desiludida com o fracasso, Clementine decide esquecer Joel para sempre e, para tanto, aceita se submeter a um tratamento experimental, que retira de sua memória os momentos vividos com ele. Após saber de sua atitude Joel entra em depressão, frustrado por ainda estar apaixonado por alguém que quer esquecê-lo. Decidido a superar a questão, Joel também se submete ao tratamento experimental. Porém ele acaba desistindo de tentar esquecê-la e começa a encaixar Clementine em momentos de sua memória os quais ela não participa.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    
                    <a href="#drama" target="_blank">Drama</a>
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

export default BrilhoEDSLpage