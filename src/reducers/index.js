import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

export default combineReducers({
    //add some fake data
    posts: postsReducer
})