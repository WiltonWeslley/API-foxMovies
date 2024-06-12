import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/IJARDp.jpg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function IndianaJonesARDpage(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Indiana Jones e A Relíquia do Destino</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Em Indiana Jones e a Relíquia do Destino, Indiana Jones (Harrisson Ford), famoso arqueólogo, professor e aventureiro, embarca em mais uma missão inesperada. Neste retorno do herói lendário, Indiana Jones, na quinta parcela da icônica série de filmes, encontra-se em uma nova era, aproximando-se da aposentadoria. Ele luta para se encaixar em um mundo que parece tê-lo superado. Mas quando as garras de um mal muito familiar retornam na forma de um antigo rival, Indiana Jones deve colocar seu chapéu e pegar seu chicote mais uma vez para garantir que um antigo e poderoso artefato não caia nas mãos erradas. Mas, desta vez, ele tem o sangue de uma nova geração para o ajudar nas suas descobertas e na sua luta contra o vilão Jürgen Voller (Mads Mikkelsen). Acompanhado de sua afilhada, Helena Shaw (Phoebe Waller-Bridge), o arqueólogo corre contra o tempo para recuperar o item que pode mudar o curso da história.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="#acao" target="_blank">Ação</a>
                    <a href="#aventura" target="_blank">Aventura</a>
                    
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

export default IndianaJonesARDpage