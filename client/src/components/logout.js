import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export class Logout extends Component {
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
            return <Redirect to="/" />
        }
    }

    onLogoutClick = () => {
        this.setRedirect();
        this.props.onLogoutClick();
    }

    render() {
        return (
            <>
                {this.renderRedirect()}
                <button onClick={this.onLogoutClick} className="btn btn-primary">
                    Logout
                </button>
            </>
        )
    }
}

Logout.propTypes = {
    onLogoutClick: PropTypes.func.isRequired
}