import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Service from './Service-shop';
import Shop from './Shop';
import Location from './Location';
import Product from './Product'
import NotFoundPage from './404';
import Checkout from './Checkout';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/service">
                    <Service />
                </Route>
                <Route path="/shop">
                    <Shop />
                </Route>
                <Route path="/location">
                    <Location />
                </Route>
                <Route path="/product">
                    <Product />
                </Route>         
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;