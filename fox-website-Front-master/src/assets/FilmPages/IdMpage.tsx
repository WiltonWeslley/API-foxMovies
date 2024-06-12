import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import ilha from "../imgs/ilha-do-medo.jpg";
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
                <div className="PFposter"><img className="PFposter2" src={ilha}/></div>
                    <div className="PFcont2">
                <div className="PFtitulo"><p className="PFtitulo2">Ilha do Medo</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">O que um bom filme de suspense precisa ter?  Ação? Nem tanto. Um bom elenco? Ajuda.  Roteiro e direção de qualidade? Certamente.  As perguntas e respostas anteriores sintetizam o que é Ilha do Medo, filme estrelado por Leonardo DiCaprio apoiado por um elenco competente, multinacional e muito luxuoso. A abertura simples acompanhada dos acordes iniciais de uma trilha absolutamente memorável já deixa o espectador com a impressão que está diante de um filmão. O que pode ser comprovado logo em seguida na apresentação magistral (visual e falada) de onde vai se desenrolar a trama. É quase impossível não ser pego nestes primeiros minutos e este é o grande barato da história: gerar envolvimento. Di Caprio vive um agente federal atormentado pelo passado diante de uma trama psicológica que vai envolver você do começo ao fim, fazendo lembrar os bons filmes de mestres do gênero, do qual Martin Scorse</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="#suspence" target="_blank">Suspence</a>
                    
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