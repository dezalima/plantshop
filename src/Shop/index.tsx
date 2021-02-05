import Footer from '../Footer';
import Navbar from '../Navbar';
import Banner from './components/banner';
import Cards from './components/cards';
import './style.css';
function Shop() {
    return (
        <main className="shop">
            <Navbar />
            <section className="shop-body">
                <Banner sub="7-14 DayS waiting" info="If you don’t know what plants you can add to the space,we can provide you with selected plants,and configure your space." />
                <Cards />
            </section>
            <Footer />
        </main>
    );
}
export default Shop;