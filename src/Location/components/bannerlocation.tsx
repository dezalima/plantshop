import './style-components.css';
import { useState } from 'react';
import Modal from './modal';

function Bannerlocation(){
    const [isVisible, setIsVisible] = useState(false);
    return(
    <div className="banner-location">
        <h1>Location</h1>
        <p>No. 100, Ln. 00, Chifeng St., Datong Dist., Taipei City 103, Taiwan (R.O.C.)</p>
        <p>Open  11:00 - 22:00</p>
        <button className="banner-button" onClick={()=>{setIsVisible(true)}}>Contact Me</button>
        {isVisible ?(
        <Modal onClose={() =>{
            setIsVisible(false)
        }} /> )
        : null}
        
        
    </div>
    );
}
export default Bannerlocation;