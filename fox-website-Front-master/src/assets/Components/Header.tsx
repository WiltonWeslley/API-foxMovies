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
  {nome:"Openheimer", rota:"Openheimer"},
  {nome:"As Branquelas", rota: "As-Branquelas"},
  {nome:'Vingadores Guerra Infinita' , rota: 'Vingadores-Guerra-Infinita'},
  {nome:"Blade Runner 2049", rota:'Blade-Runner-2049'},
  {nome:'Ilha do Medo', rota:'Ilha-do-Medo'},
  {nome:'Inimigos Publicos', rota:'Inimigos-Publicos'},
  {nome:'O irlandes', rota:'O-irlandes'},
  {nome:'Super Mario', rota:'Super-Mario'},
  {nome:'O Prototipo', rota:'O-Prototipo'},
  {nome:'Sem Rastros', rota: 'Sem-Rastros'},
  {nome:'V de Vingança', rota:'V-de-Vingança'},
  {nome:'A Bruxa', rota:'A-Bruxa'},
  {nome:'Matrix', rota:'Matrix'},
  {nome:'Os Suspeitos', rota:'Os-Suspeitos'},
  {nome:'Seven Os Sete Crimes Capitais', rota:'Seven-Os-Sete-Crimes-Capitais'},
  {nome:'Um Sonho de Liberdade', rota:'Um-Sonho-de-Liberdade'},
  {nome:'Pulp Fiction Tempo de Violencia', rota:'Pulp-Fiction-Tempo-de-Violencia'},
  {nome:'De Volta para o Futuro', rota:'De-Volta-para-o-Futuro'},
  {nome:'O Silencio dos Inocentes', rota:'O-Silencio-dos-Inocentes'},
  {nome:'Clube Da Luta', rota:'Clube-Da-Luta'},/*
  {nome:'Brilho Eterno de uma Mente Sem Lembrancas', rota:'Brilho-Eterno-de-uma-Mente-Sem-Lembrancas'},
  <Route path='/Indiana-Jones-Os-Cacadores-da-Arca-Perdida' element={<IndianaJonesCDAPpage/>}/>
  <Route path='/Indiana-Jones-e-a-Ultima-Cruzada' element={<IndianaJonesUCpage/>}/>
  <Route path='/Indiana-Jones-e-o-Templo-da-Perdicao' element={<IndianaJonesTPpage/>}/>
  <Route path='/Indiana-Jones-e-o-Reino-da-Caveira-de-Cristal' element={<IndianaJonesRCCpage/>}/>
  <Route path='/Indiana-Jones-e-A-Reliquia-do-Destino' element={<IndianaJonesARDpage/>}/>
  <Route path='/Velozes-&-Furiosos' element={<VelozesEFpage/>}/>
  <Route path='/+Velozes-+Furiosos' element={<VelozesEFMpage/>}/>
  <Route path='/Velozes-&-Furiosos:Desafio-em-Toquio' element={<VelozesEFDTpage/>}/>
  <Route path='/Velozes-&-Furiosos4' element={<VelozesEF4page/>}/>
  <Route path='/Velozes-&-Furiosos5:Operacao-Rio' element={<VelozesEF5page/>}/>
  <Route path='/Velozes-&-Furiosos6' element={<VelozesEF6page/>}/>
  <Route path='/Velozes-&-Furiosos7' element={<VelozesEF7page/>}/>
  <Route path='/Velozes-&-Furiosos8' element={<VelozesEF8page/>}/>
  <Route path='/Velozes-&-Furiosos9' element={<VelozesEF9page/>}/>
  <Route path='/Velozes-&-Furiosos10' element={<VelozesEF10page/>}/>
  <Route path='/Harry-Potter-e-a-Pedra-Filosofal' element={<HarryPotterPFpage/>}/>
  <Route path='/Harry-Potter-e-a-Camara-Secreta' element={<HarryPotterCSpage/>}/>
  <Route path='/Harry-Potter-e-o-Prisioneiro-de-Azkaban' element={<HarryPotterPApage/>}/>
  <Route path='/Harry-Potter-e-o-Calice-de-Fogo' element={<HarryPotterCFpage/>}/>
  <Route path='/Harry-Potter-e-o-Enigma-do-Principe' element={<HarryPotterEPpage/>}/>
  <Route path='/Harry-Potter-e-a-Ordem-da-Fenix' element={<HarryPotterOFpage/>}/>
  <Route path='/Harry-Potter-e-as-Reliquias-da-Morte-Parte1' element={<HarryPotterRM1page/>}/>
  <Route path='/Harry-Potter-e-as-Reliquias-da-Morte-Parte2' element={<HarryPotterRM2page/>}/>
  <Route path='/Para-Todos-os-Garotos-que-Ja-Amei' element={<ParaTodosOGpage/>}/>
  <Route path='/Para-Todos-Os-Garotos:PS-Ainda-Amo-Voce' element={<ParaTodosOGPSpage/>}/>
  <Route path='/Para-Todos-os-Garotos3' element={<ParaTodosOG3page/>}/>
  <Route path='/Shrek' element={<Shrekpage/>}/>
  <Route path='/Shrek2' element={<Shrek2page/>}/>
  <Route path='/Shrek3' element={<Shrek3page/>}/>
  <Route path='/Shrek-para-Sempre' element={<ShrekPSpage/>}/>
  <Route path='/Senhor-dos-Aneis-A-Sociedade-do-Anel' element={<SenhorDosApage/>}/>
  <Route path='/Senhor-dos-Aneis-As-Duas-Torres' element={<SenhorDosADTpage/>}/>
  <Route path='/Senhor-dos-Aneis-O-Retorno-do-Rei' element={<SenhorDosARDRpage/>}/>
  <Route path='/Star-Wars:A-Ameaça-Fantasma' element={<StarWars1page/>}/>
  <Route path='/Star-Wars:Ataque-dos-Clones' element={<StarWars2page/>}/>
  <Route path='/Star-Wars:A-Vingança-dos-Sith' element={<StarWars3page/>}/>
  <Route path='/Star-Wars:Uma-Nova-Esperança' element={<StarWars4page/>}/>
  <Route path='/Star-Wars:O-Imperio-Contra-ataca' element={<StarWars5page/>}/>
  <Route path='/Star-Wars:O-Retorno-de-Jedi' element={<StarWars6page/>}/>*/
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
          <li className="dropd1">
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