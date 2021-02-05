import './style.css';
import {ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar(){
    const [counter, setCounter] = useState(0);
    const handleIncrease = () =>{
        setCounter(counter+1);
    }
    const handleDecrease = () =>{
        setCounter(counter-1);
    }
    return(
            <nav className="menu">
                <ul>
                    <li><Link to="/"><Logo className="menu-logo" /></Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><a rel="noreferrer" href="https://www.vivadecora.com.br/revista/tipos-de-plantas/" target="_blank">Blog</a></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/location">Location</Link></li>
                    <li><Link to="" className="menu-check">Check Out <span>{counter}</span></Link></li>
                </ul>
            </nav>
    );
}
export default Navbar;