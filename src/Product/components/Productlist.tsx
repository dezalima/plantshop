import './style-components.css';
import Product from './Product';


function Productlist({onClick = () => { } }) {  

    return (
        <div className="list">
            <h2>Foliage for plants.</h2>
            <p>21 plants</p>
            <ul>
                <Product nome="Calathea Veitchiana Hook."  />
                <Product nome="Calathea Veitchiana Hook." />
                <Product nome="Calathea Veitchiana Hook." />
            </ul>
        </div>

    );
}
export default Productlist;