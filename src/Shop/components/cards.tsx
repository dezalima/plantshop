import Card from './card'
import './style-components.css'
import { Link } from 'react-router-dom';


function Cards() {
    return (
        <div className="card-list">
            <Link to="/product"><Card titulo="Foliages" numero={123} className='card-foliage' /></Link>
            <Link to="/product"><Card titulo="Pucculent" numero={13} className='card-pucculent' /></Link>
            <Link to="/product"><Card titulo="Flower" numero={83} className='card-flower' /></Link>
            <Link to="/product"><Card titulo="Fruit" numero={22} className='card-fruit' /></Link>
        </div >
    )
}
export default Cards;