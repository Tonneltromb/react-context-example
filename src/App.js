import React, {useContext, useEffect} from 'react';

import './App.scss';
import {User} from "./components/User/User";
import Products from "./components/Products/Products";
import Basket from "./components/Basket/Basket";
import {ProductsContext} from "./AppContext";

const App = (props) => {
    const {actions} = useContext(ProductsContext);
    useEffect(() => {
        console.log('[App] loading products');
        actions.loadProducts();
    }, []);

    return (
        <div className="App">
            <User name={'Alice'}/>
            <Basket/>
            <Products/>
        </div>
    );
};

export default App;
