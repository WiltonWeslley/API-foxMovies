import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/PTOGp.webp";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function ParaTodosOGpage(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Para Todos os Garotos que Já Amei</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Baseado no romance de Jenny Han, Para Todos os Garotos que Já Amei segue as aventuras amorosas de Lara Jean (Lana Condor). No ensino médio, Lara tem um hábito de escrever cartas para todos os garotos que já gostou de alguma forma, de modo que ela possa liberar o amor não correspondido ou que nunca foi falado para a pessoa. Todas as cartas que já escreveu são guardadas em uma caixa. Um dia sua irmã mais nova acha as cartas e decide mandar para todos os destinatários, afim de ajudar a irmã a ser correspondida por um deles ou apenas receber uma mensagem. Na manhã seguinte, Lara é confrontada por Peter Kavinsky (Noah Centineo), que recebeu uma de suas cartas, mas se não fosse só ele, Josh e Lucas também vão falar com ela. Em um momento de desespero ela beija Peter para despistar um dos garotos. Ciente que suas cartas foram mandadas, Lara entra em pânico, mas Peter percebe que sua ex-namorada começou a ficar com ciúmes dele. Então ele decide fazer um pacto com Lara para que eles forjem um namoro para que Peter volte com sua ex. Mas será que o amor dos dois vai florescer em meio de mentirinhas?</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="#comedia" target="_blank">Comédia</a>
                    <a href="#romance" target="_blank">Romance</a>
                    
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

export default ParaTodosOGpage