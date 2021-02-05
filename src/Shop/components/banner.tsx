import './style-components.css'
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
            <button>Try for service</button>
        </div>
    );
}
export default Banner;