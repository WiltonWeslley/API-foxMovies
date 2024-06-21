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
  {nome:'Clube Da Luta', rota:'#Clube-Da-Luta'},
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'#Brilho-Eterno-de-uma-Mente-Sem-Lembrancas'},
  {nome:'Indiana Jones Os Cacadores da Arca Perdida', rota:'#Indiana-Jones-Os-Cacadores-da-Arca-Perdida'},
  {nome:'Indiana Jones e a Ultima Cruzada', rota:'#Indiana-Jones-e-a-Ultima-Cruzada'},
  {nome:'Indiana Jones e o Templo da Perdição', rota:'#Indiana-Jones-e-o-Templo-da-Perdicao'},
  {nome:'Indiana Jones e o Reino da Caveira de Cristal', rota:'#Indiana-Jones-e-o-Reino-da-Caveira-de-Cristal'},
  {nome:'Indiana Jones e A Reliquia do Destino', rota:'#Indiana-Jones-e-A-Reliquia-do-Destino'},
  {nome:'Velozes e Furiosos', rota:'#Velozes-&-Furiosos'},
  {nome:'+Velozes e +Furiosos', rota:'#+Velozes-+Furiosos'},
  {nome:'Velozes e Furiosos:Desafio em Toquio', rota:'#Velozes-&-Furiosos:Desafio-em-Toquio'},
  {nome:'Velozes e Furiosos 4', rota:'#Velozes-&-Furiosos4'},
  {nome:'Velozes e Furiosos 5:Operação Rio', rota:'#Velozes-&-Furiosos5:Operacao-Rio'},
  {nome:'Velozes e Furiosos 6', rota:'#Velozes-&-Furiosos6'},
  {nome:'Velozes e Furiosos 7', rota:'#Velozes-&-Furiosos7'},
  {nome:'Velozes e Furiosos 8', rota:'#Velozes-&-Furiosos8' },
  {nome:'Velozes e Furiosos 9', rota:'#Velozes-&-Furiosos9' },
  {nome:'Velozes e Furiosos 10', rota:'#Velozes-&-Furiosos10'},
  {nome:'Harry Potter e a Pedra Filosofal', rota:'#Harry-Potter-e-a-Pedra-Filosofal'},
  {nome:'Harry Potter e a Camara Secreta', rota:'#Harry-Potter-e-a-Camara-Secreta'},
  {nome:'Harry Potter e o Prisioneiro de Azkaban', rota:'#Harry-Potter-e-o-Prisioneiro-de-Azkaban'},
  {nome:'Harry Potter e o Calice de Fogo', rota:'#Harry-Potter-e-o-Calice-de-Fogo'},
  {nome:'Harry Potter e o Enigma do Principe', rota:'#Harry-Potter-e-o-Enigma-do-Principe'},
  {nome:'Harry Potter e a Ordem da Fenix', rota:'#Harry-Potter-e-a-Ordem-da-Fenix'},
  {nome:'Harry Potter e as Reliquias da Morte Parte 1', rota:'#Harry-Potter-e-as-Reliquias-da-Morte-Parte1'},
  {nome:'Harry Potter e as Reliquias da Morte Parte 2', rota:'#Harry-Potter-e-as-Reliquias-da-Morte-Parte2'},
  {nome:'Para Todos os Garotos que Ja Amei', rota:'#Para-Todos-os-Garotos-que-Ja-Amei'},
  {nome:'Para Todos Os Garotos:PS Ainda Amo Você', rota:'#Para-Todos-Os-Garotos:PS-Ainda-Amo-Voce'},
  {nome:'Para Todos os Garotos 3', rota:'#Para-Todos-os-Garotos3'},
  {nome:'Shrek', rota:'#Shrek'},
  {nome:'Shrek 2', rota:'#Shrek2'},
  {nome:'Shrek 3', rota:'#Shrek3'},
  {nome:'Shrek para Sempre', rota:'#Shrek-para-Sempre'},
  {nome:'Senhor dos Aneis:A Sociedade do Anel', rota:'#Senhor-dos-Aneis-A-Sociedade-do-Anel'},
  {nome:'Senhor dos Aneis:As Duas Torres', rota:'#Senhor-dos-Aneis-As-Duas-Torres'},
  {nome:'Senhor dos Aneis:O Retorno do Rei', rota:'#Senhor-dos-Aneis-O-Retorno-do-Rei'},
  {nome:'Star Wars:A Ameaça Fantasma', rota:'#Star-Wars:A-Ameaca-Fantasma'},
  {nome:'Star Wars:Ataque dos Clones', rota:'#Star-Wars:Ataque-dos-Clones'},
  {nome:'Star Wars:A Vingança dos Sith', rota:'#Star-Wars:A-Vingança-dos-Sith'},
  {nome:'Star Wars:Uma Nova Esperança', rota:'#Star-Wars:Uma-Nova-Esperança'},
  {nome:'Star Wars:O Imperio Contra ataca', rota:'#Star-Wars:O-Imperio-Contra-ataca'},
  {nome:'Star Wars:O Retorno de Jedi', rota:'#Star-Wars:O-Retorno-de-Jedi'}
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
            <a className="Gen">Gêneros</a>
            <div className="dropd-m">

                <a href="#acao" className="classeGen">Ação <li>
                  <Link to=""></Link></li></a>

                <a href="#animacao" className="classeGen">Animação <li>
                  <Link to=""></Link></li></a>

                <a href="#aventura" className="classeGen">Aventura <li>
                  <Link to=""></Link></li></a>

                <a href="#biografia" className="classeGen">Biografia <li>
                  <Link to=""></Link></li></a>

                <a href="#comedia" className="classeGen">Comédia <li>
                  <Link to=""></Link></li></a>

                <a href="#drama" className="classeGen">Drama <li>
                  <Link to=""></Link></li></a>

                <a href="#familia" className="classeGen">Família<li>
                  <Link to=""></Link></li></a>

                <a href="#fantasia" className="classeGen">Fantasia <li>
                  <Link to=""></Link></li></a>

                <a href="#ficcao" className="classeGen">Ficção Científica <li>
                  <Link to=""></Link></li></a>

                <a href="#policial" className="classeGen">Policial <li>
                  <Link to=""></Link></li></a>

                <a href="#romance" className="classeGen">Romance <li>
                  <Link to=""></Link></li></a>

                <a href="#suspence" className="classeGen">Suspence <li>
                  <Link to=""></Link></li></a>

                <a href="#terror" className="classeGen">Terror <li>
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

        <div className="resultBuscaFilmPs">
        {isNameFiltered &&
          <ul>
            {filteredSearch.map((item) => (
              <a href={item.rota}><li key={item.nome} className="resultBuscaFilm">{item.nome}</li></a>
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