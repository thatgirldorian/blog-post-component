import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async dispatch => {
        console.log('About to fetch posts')
        await dispatch(fetchPosts())
        console.log('Just fetched posts, yaay!')
}

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


// memoize the action creator with a private function 
// const _fetchUser = _.memoize(async (id, dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`)

//         dispatch({ type: 'FETCH_USER', payload: response.data })
// })