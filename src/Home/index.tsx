import Navbar from '../Navbar';
import './style.css';
import P from './img/1.png';
import S from './img/2.png';
import T from './img/3.png';
import F from './img/4.png';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <main className="home">
            <Navbar />
            <div className="banner">
                <h1>Let's find your love plants</h1>
                <p>Add some color to your home, give it a little attention, the plants will accompany you quietly</p>
              <Link to="/shop"> <button>Let's see more</button></Link> 
                <div className="icons">
                    <ul>
                        <li>
                            <Link to="/product/foliage"><img src={P} alt="foliage"/></Link>
                        </li>
                        <li>
                            <Link to="/product/pucculent"><img src={S} alt="pucculent" /></Link>
                        </li>
                        <li>
                            <Link to="/product/flower"><img src={T} alt="flower" /></Link>
                        </li>
                        <li>
                            <Link to="/product/fruit"><img src={F} alt="fruit" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
export default Home;