import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/SHPSp.jpg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function ShrekPSpage(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Shrek para Sempre</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Shrek (Mike Myers) está entediado. Sua antiga vida de aventuras foi substituída pela de pacato pai de família. Casado com Fiona (Cameron Diaz) e pai de três filhos, Shrek sente falta da adrenalina e da liberdade que tinha no passado. Para recuperá-los, ele firma um pacto com Rumpelstiltiskin (Walt Dohrm). Imediatamente Shrek é levado a uma versão alternativa do Reino de Tão, Tão Distante, onde Fiona é uma temível ogro e ele não é mais reconhecido pelo Burro (Eddie Murphy) e o Gato de Botas (Antonio Bandera), seus melhores amigos.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="#animacao" target="_blank">Animação</a>
                    <a href="#comedia" target="_blank">Comédia</a>
                    <a href="#familia" target="_blank">Família</a>
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

export default ShrekPSpage