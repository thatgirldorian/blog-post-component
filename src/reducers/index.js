import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
    //assign reducer to a key
    posts: postsReducer, 
    users: usersReducer
})