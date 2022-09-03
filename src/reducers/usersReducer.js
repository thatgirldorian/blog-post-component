/* eslint-disable import/no-anonymous-default-export */
//create a reducer for users 
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload]
        default:
            return state 
    }
}