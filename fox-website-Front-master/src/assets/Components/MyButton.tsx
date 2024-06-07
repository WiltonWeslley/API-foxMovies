import { ReactNode } from "react"
import '../Components/MyButton.css'

interface Props{
    children: ReactNode;
    onClick: ()=> void;
}

function MyButton(props: Props){
    return(
        <button className="b1" onClick={props.onClick}>{props.children}</button>
    )
}

export default MyButton