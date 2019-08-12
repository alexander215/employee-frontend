import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Login extends Component {
    state = {
        username: '',
        password: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const login = await fetch('http://localhost:9000/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedLogin = await login.json();
        console.log(parsedLogin, "<--parsedLogin from handleSubmit in login")

        if (parsedLogin.status.message === "User Logged In") {
            console.log('logged in')
            this.setState({
                message: ''
            })
            this.props.history.push('/employees')
        } else {
            this.setState({
                message: "Incorrect username or password"
            })
        }
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label>
                    Username:
                </label>
                <input type="text" name="username" onChange={this.handleChange} />
                <label>
                    Password:
                </label>
                <input type="password" name="password" onChange={this.handleChange} />
                <button type="submit">
                    Login
                </button>
                { this.state.message.length ? <div>{this.state.message}</div> : null }
            </form>
        )
    }
}

export default withRouter(Login);