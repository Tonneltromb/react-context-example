const GOODS = [
    {title: 'cucumber'},
    {title: 'potato'},
    {title: 'garlic'},
    {title: 'salad'},
];

export const productsInitState = {
    products: []
};
export const productsReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {...state, products: action.products};
        case 'ADD_PRODUCT':
            return {...state};
        case 'DELETE_PRODUCT':
            return {...state};
        default:
            return state;
    }
};

export const actions = (dispatch) => {
    return {
        loadProducts: () => {
            setTimeout(() => dispatch({type: 'LOAD_PRODUCTS', products: GOODS}), 2000);
        }
    }
};
