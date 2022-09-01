import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostList extends React.Component {
    //create a lifecycle method 
    componentDidMount() {
        this.props.fetchPosts()
    }

    //render the list in the ui
    renderList() {
        return this.props.posts.map( post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        console.log(this.props.posts)
        return <div>{this.renderList()}</div>
    }
}

//wire up our reducer 
const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchPosts})(PostList);