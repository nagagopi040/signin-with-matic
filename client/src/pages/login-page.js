import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { userLogin } from "./../actions";
import { Login, Logout } from "./../components";

class LoginPage extends Component {
    render() {
        const { isAuthenticated, userLogin, errorMessage, logoutUser } = this.props;
        return (
            <div>
                {!isAuthenticated &&
                    <Login
                        errorMessage={errorMessage}
                        onLoginClick={userLogin}
                    />
                }

                {isAuthenticated &&
                    <Logout onLogoutClick={logoutUser} />
                }
            </div>
        )
    }
}

LoginPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

// These props come from the application"s
// state when it is started
const mapStateToProps = state => {

    const { isAuthenticated, errorMessage } = state.loginReducer

    return {
        isAuthenticated,
        errorMessage
    }
}

const mapDispatchToProps = (dispatch) => ({
    userLogin: dispatch(userLogin)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);