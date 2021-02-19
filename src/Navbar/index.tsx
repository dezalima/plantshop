import './style.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/sidebar';


function Navbar({click}: any) {

    const [sidebar, setSidebar] = useState(false);

    return (
        <nav className="menu">
            <ul>
                <li><Link to="/"><Logo className="menu-logo" /></Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><a rel="noreferrer" href="https://www.vivadecora.com.br/revista/tipos-de-plantas/" target="_blank">Blog</a></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/location">Location</Link></li>
                <li><button onClick={() => { setSidebar(true) }} className="menu-check">Check Out <span>{click}</span></button></li>
                {sidebar ? (
                    <Sidebar 
                    onClose={() =>{
                        setSidebar(false)                       
                    }}/>)
                    : null}
            </ul>
        </nav>
    );
}
export default Navbar;