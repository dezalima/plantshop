import './style-components.css'
type Props ={
    titulo: string,
    numero: number,
    className: any,
    img: any
}
function Card({titulo, numero, className,img}:Props){
    return(
        <div className={`card-shop ${className}`}>      
            <div className="card-info">
                <h3>{titulo}</h3>
                <div className="card-info-descricao">
                    <p>{numero} plants</p>
                    <img className="card-info-img" src={img} alt="" />
                </div>
            </div>     
        </div>
    )
}
export default Card;