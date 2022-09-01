/* eslint-disable import/no-anonymous-default-export */
//create a reducer for posts
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state
    }
}