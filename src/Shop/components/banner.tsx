import './style-components.css'
import { Link } from 'react-router-dom';
type Props={
    sub: string;
    info: string;
}
function Banner({sub, info}:Props) {
    return (
        <div className="banner-shop">
            <h1>Service for <span>home plants.</span></h1>
            <p className="sub">{sub}</p>
            <p className="info">{info}</p>
            <Link to="/Shop"><button>Try for service</button></Link>
        </div>
    );
}
export default Banner;