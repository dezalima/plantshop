import Footer from '../Footer';
import Navbar from '../Navbar';
import Bannerlocation from './components/bannerlocation';
import './style.css';
function Location(){
    return(
        <main className="location">
            <Navbar />
            <section className="location-body"> 
                <Bannerlocation />
            </section>
            <Footer />
        </main>
    );
}
export default Location;