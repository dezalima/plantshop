import './style-components.css';
import { ReactComponent as O } from './svg/O.svg';
import { ReactComponent as Basket } from './svg/Basket.svg';
import handleCrease from '../../Navbar'


type Props = {
    nome: string; 
}


function Product({nome}:Props) {

    return (
        <li className="produto">
            <span><O /></span>
            <p>{nome}</p>
            <button onClick={handleCrease}><Basket /></button> 

        </li>
    );
}
export default Product;