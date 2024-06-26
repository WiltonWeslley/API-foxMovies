import "./loogin.css"
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { V3X_API } from "../API.utilite/URL.API";

export interface Loogin{
  id: number;
  nome: string;
  email:string;
  senha:string;
}

function Loogin() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [userKey, setUserKey] = useState("");
    const [selectedId, setSelectedId] = useState(-1);

  const navigate = useNavigate();

  const handleUserOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  }

  const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnclick = () => {
    axios.get(`${V3X_API}/loogin?nome=${user}`)
      .then((res) => {

        const id = res.data[0].id;
        const usr = res.data[0].nome;
        const pass = res.data[0].senha;

        if(user === usr && password === pass){
          alert("Logado Com Sucesso");
          localStorage.setItem("userID", id);
          localStorage.setItem("userName", usr);
          navigate("/");
        }else{
            setUser("");
            setPassword("");
            alert("usuario ou senha errados")
        }
      }).catch((err) => {
        alert(err);
      })
  }

  const handleAddOrUpdateUser = async () => {
    if (selectedId < 0) {
      await axios.post(`${V3X_API}/loogin`, {
        nome: userName,
        email: userEmail,
        senha: userKey
      });

      alert(`${userName} Registrado com sucesso`);

     

      setUserName("");
      setPassword("");
      setUserKey("");
      setUserEmail("");

    } else {
      alert("Falha ao registar");

      setUserName("");
      setPassword("");
      setUserKey("");
      setUserEmail("");
      setSelectedId(-1);
    }
  };

  const handleOnInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleOnInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };
  const handleOnInputkey = (e: ChangeEvent<HTMLInputElement>) => {
    setUserKey(e.target.value);
  };




    return(

    <>
    <div className="FAcess">

      <div className="acess">
          <div className='l2'>
          <h2 className="at1">Faça seu Login para Acessar ao Site</h2>
          <div className="InpA"><input onChange={handleUserOnchange} type="text" name="username" placeholder="Usuário" /></div>
          <div className="InpA"><input onChange={handlePasswordOnChange} type="password" name="password" placeholder="Senha" /></div>
          </div>
         <input onClick={handleOnclick} type="submit" value="Entrar" />
      </div>

      <div className="divisao"><div className="divisao2"></div></div>

      <div className="cadass">
          <div className="c2">
            <h2 className="at2">Cadastre-se Aqui</h2>
            <div className="InpC"><input type="text" placeholder="Coloque seu Login" onChange={handleOnInputName} className='ipt0'
            value={userName.length > 0 ? userName : ""}/></div>
            <div className="InpC"><input type="text" placeholder="Coloque seu Email" onChange={handleOnInputEmail} className='ipt0'
            value={userEmail.length > 0 ? userEmail : ""} /></div>
            <div className="InpC"><input type="password" placeholder="Insira sua senha" onChange={handleOnInputkey} className='ipt0'
            value={userKey.length > 0 ? userKey : ""}  /></div>
          </div>
          <input onClick={handleAddOrUpdateUser} type="submit" value="Cadastrar" />
      </div>
    </div>
    </>
    )
}

export default Loogin