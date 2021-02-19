import './style.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useState } from 'react';
import FormData from './components/formData';
import FormPay from './components/formPay';

// const [initial, setInitial]= useState({ info: []})
// const handleChange =(e : any) =>{
//     if(e.target.value == "name"){
//         console.log('oi')
//     }
// }

function Checkout() {
    const [enable, setEnable] = useState(false);

        console.log(enable);
    return (
        <section className="checkout-main">
            <Navbar />
            <section className="checkout">
                <FormData onEnable={() =>{setEnable(true)}} />
                
                <FormPay result={enable}  />
            </section>
            <Footer />
        </section>
    )
}
export default Checkout;