import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/IJRCCp.jpg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function IndianaJonesRCCpage(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Indiana Jones e o Reino da Caveira de Cristal</p></div>
                <div className="PFdescricao"><p className="PFdescricao2"> Indiana Jones (Harrison Ford) e seu ajudante Mac (Ray Winstone) escapam por pouco de um encontro com agentes soviéticos, em um campo de pouso remoto. Agora Indiana está de volta à sua casa na Universidade Marshall, mas seu amigo e reitor da escola, Dean Stanforth (Jim Broadbent), explica que suas ações recentes o tornaram alvo de suspeita e que o governo está pressionando para que o demita. Ao deixar a cidade Indiana conhece o rebelde jovem Mutt Williams (Shia LaBeouf), que tem uma proposta: caso o ajude em uma missão Indiana pode deparar-se com a caveira de cristal de Akator. Agentes soviéticos também estão em busca do artefato, entre eles a fria e bela Irina Spalko (Cate Blanchett), cujo esquadrão de elite está cruzando o globo atrás da Caveira de Cristal.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="" target="_blank">Ação</a>
                    <a href="" target="_blank">Aventura</a>
                    
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

export default IndianaJonesRCCpage