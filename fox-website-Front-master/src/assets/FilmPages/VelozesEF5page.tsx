import { ChangeEvent, useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/VEF5p.jpg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";
import { V3X_API } from "../../API.utilite/URL.API";

/*interface Prop{
  id?: number,
  nome: string,
  imagem: string,
  descricao?: string,
  generos?: string,
  complementos?: string;
  link?: string;
}*/


export interface User{
  id: number;
  nome: string;
  comentario: string;
  id_usuarios: number;
}

  

function VelozesEF5page(){

  const [users, setUsers] = useState<User[]>([]);
  const [/*user*/, /*setUser*/] = useState<User>();
  const [userName, setUserName] = useState("");
  const [/*selectedId*/, setSelectedId] = useState<number>(-1);
  /*const [filmes, setFilmes] = useState<Filme[]>([]);*/

  useEffect(() => {
      handleGetUsers();
    }, []);

    useEffect(() => {
      axios.get(`${V3X_API}?id=${localStorage.getItem("userID")}`)
        .then((res) => {
          setSelectedId(res.data[0]); 
        })}, []);
  
  
    const handleGetUsers = async () => {
      const res = await axios.get(`${V3X_API}/users`);
  
      setUsers(res.data);
    };

    const handleAddOrUpdateUser = async () => {

      if (localStorage.getItem("userID")?.length! > 0) {
        await axios.post(`${V3X_API}/users`, {
          id_usuarios: String(localStorage.getItem("userID")),
          comentario: userName
        });
  
        handleGetUsers();
  
        setUserName("");
  
      }};

      const handleSelectUser = (id: number) => {
      const user = users.find((user: User) => user.id === id);
  
      if (user) {
        setUserName(user.comentario);
        setSelectedId(user.id);
      }
    };
  
    const handleDeleteUser = async (id: number) => {
      await axios.delete(`${V3X_API}/users?id=${id}`);
  
      alert("mensagem removido com sucesso");
  
      handleGetUsers();
      handleSelectUser
    };
  
    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    };

    /*useEffect(() => {
        axios.get(`${V3X_API}/filmes`).then((res) => {
          setFilmes(res.data)
        }).catch((err) => {
          alert(err);
        })
    }, [])*/
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
                <div className="PFtitulo"><p className="PFtitulo2">Velozes & Furiosos 5: Operação Rio</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Em Velozes & Furiosos 5: Operação Rio, Dominic Toretto (Vin Diesel) foi resgatado da prisão por sua irmã Mia (Jordana Brewster) e Brian O'Conner (Paul Walker), que realizam um ousado resgate sobre rodas. Logo em seguida, ele desaparece. Brian e Mia vão até o Rio de Janeiro, onde encontram Vince (Matt Schulze). Ele propõe ao casal o roubo de carros que estão sendo levados em um trem, algo que, segundo ele, será uma operação simples que renderá um bom lucro. Durante a operação, Dominic reaparece e diz à irmã que os planos mudaram. Ela então leva um dos carros a um esconderijo em plena favela carioca, deixando Dominic e Brian enfrentando policiais e bandidos. Ao desmontar o carro, o trio descobre que ele contém um chip com todas as operações ilegais de Hernan Reis (Joaquim de Almeida), incluindo onde guarda o dinheiro arrecadado. É o suficiente para que eles elaborem um plano para roubar a fortuna de Reis, contando com a ajuda de vários amigos.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    
                    <a href="#acao" target="_blank">Ação</a>
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
             <input placeholder='comentario' onChange={handleOnInputChange} className='ipt'
                    value={userName.length > 0 ? userName : ""} />

                 <button onClick={handleAddOrUpdateUser} className='btn'>Salvar</button>

                        {users.map((user) => (
                          <div key={user.id} className='PFcomentario2'>
                            <img className="PFCfoto" src={PFCfoto}/>
                            <div className="PFcomentarios2">
                            <p className='td1' style={{ width: "300px" }}>{user.nome}</p>
                            <p className='td3' style={{ width: "300px" }}>{user.comentario}</p>
                            
                          </div>
                          <td className='td4'><button onClick={() => { handleDeleteUser(user.id); }} className='rmv'>Remover</button></td>
                          </div>
                        ))}
                  </div>
            <div className="PFfooter">
                <Footer/>
            </div>
        </div>
     </>
)}

export default VelozesEF5page