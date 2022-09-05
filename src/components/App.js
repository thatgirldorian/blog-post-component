import React from 'react';
import PostList from './PostList';
import UserHeader from './UserHeader';
import '../styles/App.css';

const App = () => {
    return (
        <div className="ui container">
            <PostList />
            <UserHeader />
        </div>
        
    )
}

export default App