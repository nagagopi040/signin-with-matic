import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Home extends Component {
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
            return <Redirect to="/login" />
        }
    }

    render() {
        const { isAuthenticated } = this.props;
        if(isAuthenticated) {
            return <Redirect to="/profile" />
        }

        return (
            <div>
                <h2 className="heading-primary">Welcome to the Game of Theories</h2>
                {this.renderRedirect()}
                <button className="btn btn-primary" onClick={this.setRedirect} >Sign In With Matic</button>
            </div>
        )
    }
}

Home.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

// These props come from the application"s
// state when it is started
function mapStateToProps(state) {

    const { isAuthenticated } = state.loginReducer;

    return {
        isAuthenticated
    }
}

export default connect(mapStateToProps)(Home);