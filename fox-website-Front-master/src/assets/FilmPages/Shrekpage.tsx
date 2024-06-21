import { ChangeEvent, useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/SHp.jpg";
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

  

function Shrekpage(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Shrek</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Em um pântano distante vive Shrek (Mike Myers), um ogro solitário que vê, sem mais nem menos, sua vida ser invadida por uma série de personagens de contos de fada, como três ratos cegos, um grande e malvado lobo e ainda três porcos que não têm um lugar onde morar. Todos eles foram expulsos de seus lares pelo maligno Lorde Farquaad (John Lithgow). Determinado a recuperar a tranquilidade de antes, Shrek resolve encontrar Farquaad e com ele faz um acordo: todos os personagens poderão retornar aos seus lares se ele e seu amigo Burro (Eddie Murphy) resgatarem uma bela princesa (Cameron Diaz), que é prisioneira de um dragão. Porém, quando Shrek e o Burro enfim conseguem resgatar a princesa logo eles descobrem que seus problemas estão apenas começando.</p>
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

export default Shrekpage