import Card from './card'
import './style-components.css'
import { Link } from 'react-router-dom';
import P from '../img/1.png'
import S from '../img/2.png'
import T from '../img/3.png'
import F from '../img/4.png'


function Cards() {
    return (
        <div className="card-list">
            <Link to="/product"><Card titulo="Foliages" numero={123} className='card-foliage' img={P} /></Link>
            <Link to="/product"><Card titulo="Pucculent" numero={13} className='card-pucculent' img={S} /></Link>
            <Link to="/product"><Card titulo="Flower" numero={83} className='card-flower' img={T} /></Link>
            <Link to="/product"><Card titulo="Fruit" numero={22} className='card-fruit' img={F} /></Link>
        </div >
    )
}
export default Cards;