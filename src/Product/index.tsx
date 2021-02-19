import Footer from '../Footer';
import Navbar from '../Navbar';
import './style.css';
import {ReactComponent as Btn} from './Button.svg';
import {useState} from 'react';
import Productlist from './components/Productlist';

function Product() {
    const [active, setActive] = useState(false);
    const change = () =>{
        setActive(!active);
    }
    const [click, setClick] = useState(0);
    function Increase (){
        setClick(click+1);  
        console.log(click)
    }
    return (
        <main className="product">
            <Navbar click={click}  />
            <section className="product-body">
                <h1>Foliage for plants.</h1>
                <p>Add some color to your home, give it a little attention, the plants will accompany you quietly</p>
                    <div className={active === true ? 'hidden product-list' : 'show product-list'}>
                    <Productlist onClick={() => Increase} />
                    </div>
                <div className="product-button">
                    <Btn 
                    onClick={change}
                    />
                </div>
            </section>
            <Footer />
        </main>
    );
}
export default Product;