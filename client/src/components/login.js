import React, { Component } from "react";
import PropTypes from "prop-types";

export class Login extends Component {
    render() {
        return (
            <div>
                <h3 className="text-primary heading-secondary">Allow access to Game of Theories</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" />
                        <input required type="email" id="email" ref={(ref) => this.email = ref} className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" />
                        <input required type="password" id="password" ref={(ref) => this.password = ref} className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-primary">Sign In</button>
                    </div>
                    <a href="#" className="text-decoration-none" >Forgot password?</a>
                    <p className="sign-up-link">New account?<a href="#" className="text-decoration-none" > Sign up</a></p>
                </form>
            </div>
        )
    }

    onSubmit = (event) => {
        event.preventDefault();
        const email = this.email
        const password = this.password
        const creds = { email: email, password: password }
        this.props.onLoginClick(creds);
    }
}

Login.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}