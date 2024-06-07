import "./Header.css"
import logo from "../imgs/Simple Black Beige Men Style Typography Fashion Logo.png"
import lupa from "../imgs/pipoca-para-filmes.png"
import { Link } from "react-router-dom";
import UserP from '../imgs/user.svg';
import { useEffect, useState } from "react";
import axios from "axios";
import { V3X_API } from "../../API.utilite/URL.API";


interface Search{
  nome: string;
  rota: string;
}

interface User{
  id: number;
  nome: string;
}


const search : Search[] = [  
  {nome:"Openheimer", rota:"#Openheimer"},
  {nome:"As Branquelas", rota: "#As-Branquelas"},
  {nome:'Vingadores Guerra Infinita' , rota: '#Vingadores-Guerra-Infinita'},
  {nome:"Blade Runner 2049", rota:'#Blade-Runner-2049'},
  {nome:'Ilha do Medo', rota:'#Ilha-do-Medo'},
  {nome:'Inimigos Publicos', rota:'#Inimigos-Publicos'},
  {nome:'O irlandes', rota:'#O-irlandes'},
  {nome:'Super Mario', rota:'#Super-Mario'},
  {nome:'O Prototipo', rota:'#O-Prototipo'},
  {nome:'Sem Rastros', rota: '#Sem-Rastros'},
  {nome:'V de Vingança', rota:'#V-de-Vingança'},
  {nome:'A Bruxa', rota:'#A-Bruxa'},
  {nome:'Matrix', rota:'#Matrix'},
  {nome:'Os Suspeitos', rota:'#Os-Suspeitos'},
  {nome:'Seven Os Sete Crimes Capitais', rota:'#Seven-Os-Sete-Crimes-Capitais'},
  {nome:'Um Sonho de Liberdade', rota:'#Um-Sonho-de-Liberdade'},
  {nome:'Pulp Fiction Tempo de Violencia', rota:'#Pulp-Fiction-Tempo-de-Violencia'},
  {nome:'De Volta para o Futuro', rota:'#De-Volta-para-o-Futuro'},
  {nome:'O Silencio dos Inocentes', rota:'#O-Silencio-dos-Inocentes'},
  {nome:'Clube Da Luta', rota:'#Clube-Da-Luta'},/*
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Brilho-Eterno-de-uma-Mente-Sem-Lembrancas'},
  {nome:'Indiana Jones Os Cacadores da Arca Perdida', rota:'#Indiana-Jones-Os-Cacadores-da-Arca-Perdida'},
  {nome:'Indiana Jones e a Ultima Cruzada', rota:'#Indiana-Jones-e-a-Ultima-Cruzada'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Indiana-Jones-e-o-Templo-da-Perdicao'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Indiana-Jones-e-o-Reino-da-Caveira-de-Cristal'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Indiana-Jones-e-A-Reliquia-do-Destino'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Velozes-&-Furiosos'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#+Velozes-+Furiosos'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Velozes-&-Furiosos:Desafio-em-Toquio'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Velozes-&-Furiosos4'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Velozes-&-Furiosos5:Operacao-Rio'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Velozes-&-Furiosos6'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Velozes-&-Furiosos7'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Velozes-&-Furiosos8' },
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Velozes-&-Furiosos9' },
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Velozes-&-Furiosos10'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Harry-Potter-e-a-Pedra-Filosofal'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Harry-Potter-e-a-Camara-Secreta'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Harry-Potter-e-o-Prisioneiro-de-Azkaban'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Harry-Potter-e-o-Calice-de-Fogo'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Harry-Potter-e-o-Enigma-do-Principe'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Harry-Potter-e-a-Ordem-da-Fenix'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Harry-Potter-e-as-Reliquias-da-Morte-Parte1'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Harry-Potter-e-as-Reliquias-da-Morte-Parte2'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Para-Todos-os-Garotos-que-Ja-Amei'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Para-Todos-Os-Garotos:PS-Ainda-Amo-Voce'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Para-Todos-os-Garotos3'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Shrek'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Shrek2'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Shrek3'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Shrek-para-Sempre'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Senhor-dos-Aneis-A-Sociedade-do-Anel'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Senhor-dos-Aneis-As-Duas-Torres'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Senhor-dos-Aneis-O-Retorno-do-Rei'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Star-Wars:A-Ameaça-Fantasma'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Star-Wars:Ataque-dos-Clones'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Star-Wars:A-Vingança-dos-Sith'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Star-Wars:Uma-Nova-Esperança'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Star-Wars:O-Imperio-Contra-ataca'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Star-Wars:O-Retorno-de-Jedi'},*/
]
    
function Header(){

  const [/*user*/, setUser] = useState<User>();

  useEffect(() => {
    axios.get(`${V3X_API}/loogin?id=${localStorage.getItem("userID")}`)
      .then((res) => {
        setUser(res.data[0]); 
      })}, []);


    const [busca, setBusca]= useState("");
    

    const filteredSearch = search.filter((item) => {
      return item.nome.toLowerCase().includes(busca.toLowerCase());
    });

    const isNameFiltered = filteredSearch.some((item) => item.nome === busca);

    

      


    return(
    <div className='header'>
        <img src={logo} className='lg'/>
        <li className='list1'>
          <a href="/"><p className='hb1'>P.inicial</p></a>
          <li className="dropd">
            <a>Gêneros</a>
            <div className="dropd-m">

                <a href="#/terror" className="horror">Terror <li>
                  <Link to=""></Link></li></a>

                <a href="#/ação" className="shots">Ação <li>
                  <Link to=""></Link></li></a>

                <a href="#/comédia" className="funny">Comédia <li>
                  <Link to=""></Link></li></a>

                <a href="#/policial" className="cops">Policial <li>
                  <Link to=""></Link></li></a>

                <a href="#/sci-fi" className="nerd">Ficção Científica <li>
                  <Link to=""></Link></li></a>

                <a href="#/suspense" className="suspense">Suspense <li>
                  <Link to=""></Link></li></a>

                <a href="#/drama" className="drama">Drama <li>
                  <Link to=""></Link></li></a>

            </div>
          </li>
          <Link to="/movies" className='hb1'>Filmes</Link>
        </li>
        <li>
        <div className='ps1'>
            
        <input className='ps1i' type="text" placeholder='          procurando por diversão?    ' 
        value={busca} onChange={(ev)=> setBusca(ev.target.value)}/>

            <button className='ps1b'><img className='ps1f' src={lupa} /></button>
            
        </div>

        <div>
        {isNameFiltered &&
          <ul>
            {filteredSearch.map((item) => (
              <a href={item.rota}><li key={item.nome}>{item.rota}</li></a>
            ))}
          </ul>
          }
        </div>
        </li>

        <div className="UserH"> 
          <img className="PFCfoto" src={UserP}/>

          {!localStorage.getItem("userID") ?    
          
            <ul className="UserH2">
              <a href="#/login"><p>entrar ou </p>
            <p>Cadastrar  </p></a>
            </ul>
          
          :
            <li className="dropd">
            <div className="UserLog"><p>Olá {localStorage.getItem("userName")} </p></div>
                  <div className="dropd-m">
                    <a href="#/login" ><p>Sair da Conta</p></a>
                  </div>


            </li>
          }
        </div>
    </div>
    )
}

export default Header