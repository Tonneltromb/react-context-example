export const initialState = {
    auth: false,
    token: ''
};
export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state,};
        case 'LOGOUT':
            return {...state,};
        default:
            return state;
    }
};
