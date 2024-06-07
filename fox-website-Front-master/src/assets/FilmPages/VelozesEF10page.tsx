import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/VEF10p.jpg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function VelozesEF10page(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Velozes & Furiosos 10</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">No décimo filme da série Velozes & Furiosos e último da nova trilogia (Velozes 8, 9 e 10), ao longo de muitas missões e contra probabilidades que pareciam impossíveis, Dom Toretto (Vin Diesel) e sua família foram mais espertos e superaram todos os inimigos em seu caminho. Agora, eles devem desafiar o adversário mais letal que já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado na forma de Dante (Jason Momoa), para destruir o mundo de Toretto e destruir tudo - e todos - que ele ama. Ele então, comandando novamente a equipe de corredores mais conhecida do mundo, encara mais uma difícil missão sobre quatro rodas. O fim da estrada começa e Velozes & Furiosos 10 lança os capítulos finais de uma das franquias globais mais famosas e populares do cinema, agora em sua terceira década e ainda forte com o mesmo elenco e personagens centrais de quando começou.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="" target="_blank">Acão</a>
                  
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

export default VelozesEF10page