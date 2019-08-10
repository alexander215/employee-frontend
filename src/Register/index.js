import React, { Component } from 'react';

class Register extends Component {
    state = {
        username: '',
        password: '',
        admin: false
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
                <label>
                    Check if admin:
                </label>
                <input type="checkbox" name="admin" />
                <button type="submit">
                    Register
                </button>
            </form>
        )

    }
}

export default Register;