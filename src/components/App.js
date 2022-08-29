import React from 'react';
import PostList from './PostList';
import UserHeader from './UserHeader';

const App = () => {
    return (
        <div className="ui container">
            Here's our app
            <PostList />
            <UserHeader />
        </div>
        
    )
}

export default App