import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostList extends React.Component {
    //create a lifecycle method 
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return <div>Here's out sample blog post.</div>
    }
}

export default connect(null, {fetchPosts})(PostList);