import { ReactComponent as Trash } from './svg/trash.svg';
import { ReactComponent as Basket } from './svg/Basket-2.svg';
import { Link } from 'react-router-dom';
import './style-components.css';
import FocusLock from 'react-focus-lock';

function Sidebar({ id = 'out', onClose = () => { } }) {
    const handleClick = (e: any) => {
        if (e.target.id === id) {
            onClose();
        }
    }

    return (
        <header id={id} onClick={handleClick} className="sidebar">
            <div className=" sidebar-car" >
                <FocusLock>
                    <div className="car-header">
                        <h1>Cart</h1>
                        <Basket width="90" height="90" />
                    </div>
                    <div className="car-body">
                        <h2>Products</h2>
                        <ul className="car-body-list">
                            <li className="car-body-li">
                                <p>Calathea Veitchiana Hook.</p>
                                <button><Trash width="25" height="25" /></button>
                            </li>
                            <li className="car-body-li">
                                <p>Calathea Veitchiana Hook.</p>
                                <button><Trash width="25" height="25" /></button>
                            </li>
                            <li className="car-body-li">
                                <p>Calathea Veitchiana Hook.</p>
                                <button><Trash width="25" height="25" /></button>
                            </li>
                        </ul>
                    </div>
                    <div className="car-button">
                        <Link to="/checkout"><button>checkout</button></Link>
                    </div>
                </FocusLock>
            </div>
        </header>
    )
}
export default Sidebar;