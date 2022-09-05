import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'

class PostList extends React.Component {
    //create a lifecycle method 
    componentDidMount() {
        this.props.fetchPostsAndUsers()
    }

    //render the list in the ui
    renderList() {
        return this.props.posts.map( post => {
            return (
                    <div className="item" key={post.id}>
                        <i className="large middle aligned icon user" />
                        <div className="content">
                            <div className="description">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                            <h4><UserHeader userId={post.userId} /></h4>
                        </div>
                    </div>
            )
        })
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

//wire up our reducer 
const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);