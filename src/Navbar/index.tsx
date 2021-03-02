import './style.css';
import { ReactComponent as Logo } from './components/svg/logo.svg';
import { ReactComponent as Menu } from './components/svg/menu.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/sidebar';


function Navbar() {

    const [sidebar, setSidebar] = useState(false);
    const [burguer, setBurguer] = useState(false);
    
    return (
        <nav className="menu" >
            <ul className={burguer ? 'menu-ul left' : 'menu-ul'}>
                <li><Link to="/"><Logo className="menu-logo" /></Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><a rel="noreferrer" href="https://www.vivadecora.com.br/revista/tipos-de-plantas/" target="_blank">Blog</a></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/location">Location</Link></li>
                <li><button onClick={() => { setSidebar(true) }} className="menu-check">Check Out <span>{}</span></button></li>
                {sidebar ? (
                    <Sidebar 
                    onClose={() =>{
                        setSidebar(false)                       
                    }}/>)
                    : null}
            </ul>
            <Menu className="menu-media" onClick={()=>{setBurguer(!burguer)}} />
        </nav>
    );
}
export default Navbar;