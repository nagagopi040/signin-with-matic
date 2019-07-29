import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginUser, getUserData } from "./../actions"
import { Login } from "./../components";

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/profile" />
        }
    }

    onLoginClick = (creds) => {
        this.props.dispatch(loginUser(creds)).then(() =>{
            var token = localStorage.getItem("token");
            if(token){
                this.props.dispatch(getUserData(token));
            }
        })
        this.setRedirect();
    }

    render() {
        const { isAuthenticated, isFetching , errorMessage } = this.props;
        if(isAuthenticated) {
            return <Redirect to="/profile" />
        }

        if(isFetching) {
            return "loading ..."
        }

        return (
            <div>
                {this.renderRedirect()}
                <Login onLoginClick={this.onLoginClick} />
                {errorMessage &&
                    <p className="error-message">{errorMessage}</p>
                }
            </div>
        )
    }
}

LoginPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
    const { isAuthenticated, errorMessage } = state.loginReducer

    return {
        isAuthenticated,
        errorMessage
    }
}

export default connect(mapStateToProps)(LoginPage);