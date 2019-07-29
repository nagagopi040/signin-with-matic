import React, { Component } from "react";
import PropTypes from "prop-types";

export class Login extends Component {
    render() {
        return (
            <div>
                <h3>Allow access to Game of Theories</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username" />
                        <input type="text" id="username" ref={(ref) => this.username = ref} className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" />
                        <input type="password" id="password" ref={(ref) => this.password = ref} className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Sign In
                    </button>
                </form>
            </div>
        )
    }

    onSubmit = (event) => {
        event.preventDefault();
        const username = this.username
        const password = this.password
        const creds = { username: username, password: password }
        this.props.onLoginClick(creds);
    }
}

Login.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}