import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'


//wire up an action creator to fetch posts
export const fetchPosts = () => async dispatch =>  {
        const response = await jsonPlaceholder.get('/posts')

        dispatch({ type: 'FETCH_POSTS', payload: response.data })
}   

//add an action creator to fetch users
export const fetchUser = (id) => async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`)

        dispatch( {type: 'FETCH_USER', payload: response.data})
}       