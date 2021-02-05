import './style-components.css'
type Props ={
    titulo: string;
    numero: number;
    className: any;
}
function Card({titulo, numero, className}:Props){
    return(
        <div className={`card-shop ${className}`}>      
            <div className="card-info">
                <h3>{titulo}</h3>
                <div className="card-info-descricao">
                    <p>{numero} plants</p>
                    <img className="card-info-img" src="./img/2.png" alt="" />
                </div>
            </div>     
        </div>
    )
}
export default Card;