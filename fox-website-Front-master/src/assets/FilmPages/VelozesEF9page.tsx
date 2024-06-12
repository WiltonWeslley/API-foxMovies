import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/VeF9p.jpg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function VelozesEF9page(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Velozes & Furiosos 9</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Em Velozes & Furiosos 9, dois anos após o confronto com a ciber-terrorista Cipher - no filme Velozes e Furiosos 8 - Dominic Toretto (Vin Diesel) - agora aposentado - e Letty (Michelle Rodriguez) vivem uma vida pacata ao lado de seu filho Brian. Mas a vida dos dois é logo interrompida quando Roman Pearce, Tej Parker e Ramsey chegam com notícias de que, pouco depois de prender Cipher (Charlize Theron), o avião de Mr. Nobody foi atacado por agentes e sequestraram Cipher, precisando da ajuda dele para investigar mais afundo. Acompanhando eles em uma missão, o grupo logo acha nos escombros parte de um dispositivo chamado Projeto Aries. A calmaria é dissipada quando o irmão desaparecido de Dom retorna e rouba o dispositivo deles com um grupo altamente treinado. Jakob (John Cena), um assassino habilidoso e excelente motorista, está trabalhando ao lado de Cipher. Para enfrentá-los, Toretto vai precisar reunir sua equipe novamente, inclusive Han (Sung Kang), que todos acreditavam estar morto.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="#acao" target="_blank">Ação</a>
                    
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

export default VelozesEF9page