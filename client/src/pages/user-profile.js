import React, { Component } from "react";
import { connect } from "react-redux";

import { logoutUser, getUserData } from "./../actions";
import { Logout } from "./../components";

class UserProfile extends Component {
    componentDidMount(){
        const { isAuthenticated, dispatch } = this.props;

        if(isAuthenticated){
            let token = localStorage.getItem('token');
            dispatch(getUserData(token));
        }
    }

    render() {
        const { dispatch, isFetching, errorMessage, sucessMessage, user  } = this.props;

        if(isFetching) {
            return "loading ..."
        }

        return (
            <div>
                <Logout onLogoutClick={() => dispatch(logoutUser())} />
                {user &&
                    <h2>{user.name}</h2>
                }
                {errorMessage &&
                    <p className="error-message">{errorMessage}</p>
                }
                {sucessMessage &&
                    <p className="sucess-message">{sucessMessage}</p>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { isFetching, isAuthenticated, errorMessage, successMessage, user } = state.userReducer

    return {
        isFetching,
        isAuthenticated,
        errorMessage,
        successMessage,
        user
    }
}

export default connect(mapStateToProps)(UserProfile);