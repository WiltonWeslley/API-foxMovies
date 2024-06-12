import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import witch from "../imgs/a-bruxa-thewitch-poster.jpg";
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
                <div className="PFposter"><img className="PFposter2" src={witch}/></div>
                    <div className="PFcont2">
                <div className="PFtitulo"><p className="PFtitulo2">A Bruxa</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Nova Inglaterra, década de 1630. O casal William e Katherine leva uma vida cristã com suas cinco crianças em uma comunidade extremamente religiosa, até serem expulsos do local por sua fé diferente daquela permitida pelas autoridades. A família passa a morar num local isolado, à beira do bosque, sofrendo com a escassez de comida. Um dia, o bebê recém-nascido desaparece. Teria sido devorado por um lobo? Sequestrado por uma bruxa? Enquanto buscam respostas à pergunta, cada membro da família enfrenta seus piores medos e seu lado mais condenável.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="#terror" target="_blank">Terror</a>
                   
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