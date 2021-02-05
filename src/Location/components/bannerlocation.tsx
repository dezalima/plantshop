import { Link } from 'react-router-dom';
import './style-components.css';
function Bannerlocation(){
    return(
    <div className="banner-location">
        <h1>Location</h1>
        <p>No. 100, Ln. 00, Chifeng St., Datong Dist., Taipei City 103, Taiwan (R.O.C.)</p>
        <p>Open  11:00 - 22:00</p>
        <Link to="/"><button>Contact Me</button></Link>
    </div>
    );
}
export default Bannerlocation;