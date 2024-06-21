import { ChangeEvent, useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/HPRM1p.jpg";
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

  

function HarryPotterRM1page(){

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
                <div className="PFtitulo"><p className="PFtitulo2">Harry Potter e as Relíquias da Morte - Parte 1</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">Prestes a completar 17 anos, Harry Potter (Daniel Radcliffe) precisa ser transportado da casa dos seus tios, os Dursley, até um local seguro. Lorde Voldemort (Ralph Fiennes) e seus comensais da morte sabem que a transferência está prestes a acontecer e aguardam sua realização para atacar. Para que ela ocorra vários amigos de Harry, como Rony Weasley (Rupert Grint), Hermione Granger (Emma Watson), Remo Lupin (David Thewlis), Hagrid (Robbie Coltrane) e "Olho-Tonto" Moody (Brendan Gleeson), tomam a Poção Polissuco e assumem a forma física de Harry. A intenção é despistar Voldemort sobre quem é o Harry verdadeiro, de forma que ele possa chegar seguro à Toca, casa dos Weasley. A missão é bem sucedida, mas logo a situação se torna ainda mais perigosa. O Ministro da Magia Rufus Scrimgeour (Bill Nighy) é morto e, em seu lugar, assume um dos asseclas de Voldemort. Harry e seus amigos passam a ser caçados impiedosamente, obrigando que ele, Rony e Hermione fujam. Precisando mudar constantemente de lugar, eles elaboram um plano para encontrar e destruir as horcruxes que podem eliminar Voldemort de uma vez por todas.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="#aventura" target="_blank">Aventura</a>
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

export default HarryPotterRM1page