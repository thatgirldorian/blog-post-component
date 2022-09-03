import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        //loop through array of users and display the one we need
        const user = this.props.users.find(user => user.id === this.props.userId)

        if (!user) {
            return null
        }

        return  <div className="header">{user.name}</div>
    }
}

//Access state from redux 
const mapStateToProps = (state) =>{
    return { users: state.users }
}


export default connect(mapStateToProps, { fetchUser})(UserHeader);