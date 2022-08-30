import jsonPlaceholder from '../apis/jsonPlaceholder'

//wire up an action creator 
export const fetchPosts = () => {
    const promise = jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POSTS',
        payload: promise
    }
}