import Footer from '../Footer';
import Navbar from '../Navbar';
import './style.css';
import { ReactComponent as Btn } from './Button.svg';
import { useState } from 'react';
import Productlist from './components/Productlist';
import { useParams } from "react-router-dom";

interface Props {
    type: any
}


function Product() {
    const { type } = useParams<Props>();


    const [active, setActive] = useState(false);
    const change = () => {
        setActive(!active);
    }
  


    return (
        <main className="product">
            <Navbar />
            <section className="product-body">
                <h1>Foliage for plants.</h1>
                <p>Add some color to your home, give it a little attention, the plants will accompany you quietly</p>
                <div className={active === true ? 'hidden product-list' : 'show product-list'}>
                    <Productlist categoria={type} />
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