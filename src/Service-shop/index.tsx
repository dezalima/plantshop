import Footer from '../Footer';
import Navbar from '../Navbar';
import Bannerservice from './components/bannerservice';
import './style.css';
function Service(){
    return(
        <main className="service">
            <Navbar />
            <section className="service-body"> 
                <Bannerservice />
            </section>
            <Footer />
        </main>
    );
}
export default Service;