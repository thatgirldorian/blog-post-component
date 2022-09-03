import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        //loop through array of users and display the one we need
        const { user } = this.props

        if (!user) {
            return null
        }

        return  <div className="header">{user.name}</div>
    }
}

//Access state from redux 
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) }
}


export default connect(mapStateToProps, { fetchUser})(UserHeader);