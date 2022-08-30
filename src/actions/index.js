import jsonPlaceholder from '../apis/jsonPlaceholder'


//wire up an action creator 
export const fetchPosts = () => {
    return async dispatch =>  {
        const response = await jsonPlaceholder.get('/posts')

        dispatch({ type: 'FETCH_POSTS', payload: response })
    }
}   