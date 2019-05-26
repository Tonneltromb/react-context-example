import React, {useEffect} from 'react';

import PropTypes from 'prop-types';

import './Products.scss'
import {ProductsContext} from "../../AppContext";

const Products = (props) => {
    const {state, actions} = React.useContext(ProductsContext);
    return React.useMemo(() => {
        console.log('rendered');
        return (
            <div className='Products'>
                <h3>Каталог товаров</h3>
                <span>products catalogue...</span>
                <ul>
                    {state.products.map((good) => <li key={good.title}>{good.title}</li>)}
                </ul>
            </div>)
    }, [state.products])
};

Products.propTypes = {};

export default Products;
