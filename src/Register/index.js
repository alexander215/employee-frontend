import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Register extends Component {
    state = {
        username: '',
        password: '',
        admin: false
    }

    handleChange = (e) => {
        if ((e.currentTarget.name === "admin") && (e.currentTarget.value === "on")){
            console.log('inside if')
            this.setState({
                admin: true
            });
        } else {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }
        console.log(this.state)
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
        const parsedRegister = await register.json();

        console.log(parsedRegister, '<--parsedRegister from Register')

        if (parsedRegister.status.message === "User Logged In") {
            console.log('Logged in');
            this.props.history.push('/employees');
        }
        console.log(this.props, '<--this.props in ./Register')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username: </label>
                <input type="text" name="username" onChange={this.handleChange} />
                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleChange} />
                <label>Check if admin: </label>
                <input type="checkbox" name="admin" onChange={this.handleChange} />
                <button type="submit">Register</button>
            </form>
        )

    }
}

export default withRouter(Register);