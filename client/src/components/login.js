import React, { Component } from "react";
import PropTypes from "prop-types";

export class Login extends Component {

    render() {
        const { errorMessage } = this.props

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

                {errorMessage &&
                    <p>{errorMessage}</p>
                }
            </div>
        )
    }

    onSubmit = (event) => {
        event.preventDefault();
        var config = {
            method: "POST"
        }
        fetch("http://localhost:8080/auth/sigin", config)
            .then(response => response.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}

Login.propTypes = {
    onLoginClick: PropTypes.object.isRequired,
    errorMessage: PropTypes.string
}