import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

export default combineReducers({
    //assign reducer to a key
    posts: postsReducer
})