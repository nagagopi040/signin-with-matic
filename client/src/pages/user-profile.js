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
        const { dispatch, isFetching, errorMessage, successMessage, user  } = this.props;

        if(isFetching) {
            return (
                <div className="loader">
                    <p className="text-primary">checking</p>
                    <div className="loader-icon"><img src="https://cdn3.iconfinder.com/data/icons/pictofoundry-pro-vector-set/512/LoadingIndicator-512.png" /></div>
                </div>
            )
        }

        return (
            <div>
                <Logout onLogoutClick={() => dispatch(logoutUser())} />
                {user &&
                    <div>
                        <h2 className="text-primary">Welcome {user.name}</h2>
                        <div className="user-details">
                            <p>Country: {user.country}</p>
                            <p>Phone Number: {user.phone}</p>
                        </div>
                    </div>
                }
                {errorMessage &&
                    <p className="error-message bg-danger">{errorMessage}</p>
                }
                {successMessage &&
                    <p className="success-message bg-primary">{successMessage}</p>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { isFetching, isAuthenticated, successMessage, errorMessage, user } = state.userReducer;

    return {
        isFetching,
        isAuthenticated,
        errorMessage,
        successMessage,
        user
    }
}

export default connect(mapStateToProps)(UserProfile);