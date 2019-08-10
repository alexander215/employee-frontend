import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const register = await fetch('http://localhost:9000/auth/register', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        return (
            <form>
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
            </form>
        )
    }
}

export default Login;