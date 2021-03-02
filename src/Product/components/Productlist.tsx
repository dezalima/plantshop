import './style-components.css';
import Product from './Product';
import typ from './Listdata.json';


function Productlist(prop : any) {
    let listTam;
    let listProd;

    if (prop.categoria === 'foliage') {
        listTam = typ.foliage.length;
        listProd = typ.foliage.map(o =>
            <Product nome={o.name} />
        );
    }
    if (prop.categoria === 'pucculent') {
        listTam = typ.pucculent.length;
        listProd = typ.pucculent.map(o =>
            <Product nome={o.name} />
        );
    }
    if (prop.categoria === 'flower') {
        listTam = typ.flower.length;
        listProd = typ.flower.map(o =>
            <Product nome={o.name} />
        );
    }
    if (prop.categoria === 'fruit') {    
        listTam = typ.fruit.length;
        listProd = typ.fruit.map(o =>
            <Product nome={o.name} />
        );
    }

    return (
        <div className="list">
            <h2>Foliage for {prop.categoria}.</h2>
            <p>{listTam} plants</p>
            <ul className="list-div">{listProd}</ul>
        </div>

    );
}
export default Productlist;