import React from 'react';

import PropTypes from 'prop-types';

import './Basket.scss'

const Basket = (props) => {
    return (
        <div className='Basket'>
            <h3>Ваша корзина</h3>
            <span>products...</span>
        </div>
    );
};

Basket.propTypes = {

};

export default Basket;
