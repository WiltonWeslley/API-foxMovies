import { ChangeEvent } from 'react';
import '../Components/MyInput.css';

interface Props{ // definir as variaveis como componentes para ter mais liberdade de auterar dps
    type: string; 
    placeholder?: string;
    bgcolor?: string;
    value?: string;
    borderColor?: string;

    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function MyInput(props: Props){ //fazendo afunção como modulos permite uma maior flexibilidade do componetes sem ficar tao engesado
    return(
        <input className='i1' 
        type={props.type} // definindo o componente desse jeito permite escolher as caracteristicas deles dps
        placeholder={props.placeholder} 
        style={{backgroundColor:`${props.bgcolor}`}}
        onChange={props.onChange}
        value={props.value}
        typeof={props.borderColor}
        
         />
    )
}

export default MyInput