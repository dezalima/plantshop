import Footer from '../Footer';
import Navbar from '../Navbar';
import './style.css';
import {ReactComponent as Btn} from './Button.svg';
import {useState} from 'react';
import Productlist from './components/Productlist';

function Product() {
    const state={
        isActive: false

    }
    return (
        <main className="product">
            <Navbar />
            <section className="product-body">
                <h1>Foliage for plants.</h1>
                <p>Add some color to your home, give it a little attention, the plants will accompany you quietly</p>
                <div className="product-list">
                    <Productlist />
                </div>
                <div className="product-button">
                    <Btn 
                    className={state.isActive ? "show" : "hidden"} 
                    onClick={()=>{
                        state({isActive: !state.isActive})
                    }}
                    />
                </div>
            </section>
            <Footer />
        </main>
    );
}
export default Product;