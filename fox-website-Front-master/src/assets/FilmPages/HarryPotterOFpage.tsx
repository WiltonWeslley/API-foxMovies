import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/HPOFp.jpg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function HarryPotterOFpage(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Harry Potter e a Ordem da Fênix</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Harry Potter (Daniel Radcliffe) retorna à Escola de Magia e Bruxaria de Hogwarts, para cursar o 5º ano letivo. Logo ele descobre que boa parte da comunidade bruxa foi levada a acreditar que o retorno de Voldemort (Ralph Fiennes) foi uma mentira inventada por Harry, o que põe sua credibilidade em dúvida. Além disto, o Ministro da Magia Cornélio Fudge (Robert Hardy) impõe à escola a presença de Dolores Umbridge (Imelda Staunton), que torna-se a nova professora de Defesa Contra as Artes das Trevas. Acontece que as aulas de Umbridge, apesar de aprovadas pelo ministério, abrangem apenas temas amenos, deixando os alunos despreparados para os perigos dos dias atuais. Incentivado por seus amigos Rony (Rupert Grint) e Hermione (Emma Watson), Harry decide encontrar-se em segredo com um grupo de estudantes, visando a prática de magia. O grupo se autodenomina como a "Armada de Dumbledore", mas logo passa a ser vista como uma ameaça ao próprio Ministério da Magia.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="#aventura" target="_blank">Aventura</a>
                    <a href="#drama" target="_blank">Drama</a>
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

export default HarryPotterOFpage