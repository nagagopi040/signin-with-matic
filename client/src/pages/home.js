import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

class Home extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }

    render() {
        return (
            <div>
                <h2>Welcome to the Game of Theories</h2>
                {this.renderRedirect()}
                <button onClick={this.setRedirect} >Sign In With Matic</button>
            </div>
        )
    }
}

Home.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
}

// These props come from the application"s
// state when it is started
function mapStateToProps(state) {

    const { isAuthenticated, errorMessage } = state.loginReducer

    return {
        isAuthenticated,
        errorMessage
    }
}

export default connect(mapStateToProps)(Home);