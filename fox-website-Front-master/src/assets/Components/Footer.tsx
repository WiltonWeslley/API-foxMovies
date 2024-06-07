import "./Footer.css"
import insta from "../imgs/insta.svg";
import face from "../imgs/face.svg";
import git from "../imgs/git.svg";


function Footer(){
    return(
        <div className='footer'>
            <div className="ft2">
        <h3 className='ft'>Nossa redes Sociais</h3>
        <li className='li1'>
        <a className='a1' href="https://www.facebook.com/?locale=pt_BR"><img className='icon2' src={face}/> Facebook</a>
        <a className='a1' href="https://www.facebook.com/?locale=pt_BR"><img className='icon2' src={insta}/> Instagram</a>
        <a className='a1' href="https://www.facebook.com/?locale=pt_BR"><img className='icon2' src={git}/>  GitHub</a>
        </li>
        </div>
        <div className='CPF'>
        <p className='CP'>COPYRIGHT © 2024 - ALL RIGHTS RESERVED BY </p><p className='FP'>Fox Movies</p>
        </div>
        </div>
    )
}

export default Footer 