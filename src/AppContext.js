import React, {createContext, useReducer, useState} from 'react';

import {productsReducer, productsInitState, actions} from './stores/products.store';

export const AuthContext = createContext(false);
export const ProductsContext = createContext(null);

const AppContext = (props) => {
    const [auth, setAuth] = useState(false);
    const [state, dispatch] = useReducer(productsReducer, productsInitState);
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            <ProductsContext.Provider value={{state, actions: actions(dispatch)}}>
                {props.children}
            </ProductsContext.Provider>
        </AuthContext.Provider>
    );
};
export default AppContext;
