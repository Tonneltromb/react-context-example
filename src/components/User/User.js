import React, {useContext} from 'react';

import PropTypes from 'prop-types';

import './User.scss'
import {AuthContext, ProductsContext} from "../../AppContext";

const User = (props) => {
    const authContext = useContext(AuthContext);
    const productsContext = useContext(ProductsContext);
    return (
        <div className='User'>
            <div>
                <h3>{props.name}</h3>
                <b>auth status: <i>{`${authContext.auth}`}</i></b>
                <br/>
                <span>goods length: {productsContext.state.products.length}</span>
                <br/>
            </div>
            <div className='User__auth-buttons'>
                {/*<button className='button'*/}
                {/*        onClick={() => productsContext.state.products.setGoods([...productsContext.goods, {title: 'apple'}])}>ADD PRODUCT</button>*/}
                <button className='button'
                        onClick={() => authContext.setAuth(true)}>LOG IN</button>
                <button className='button'
                        onClick={() => authContext.setAuth(false)}>LOG OUT</button>
            </div>
        </div>
    );
};

User.propTypes = {
    name: PropTypes.string.isRequired
};

export {User};
