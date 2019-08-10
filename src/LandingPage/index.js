import React, { Component } from 'react';
import Login from '../Login';
import Register from '../Register';

class LandingPage extends Component {
    state = {
        username: '',
        password: '',
        admin: false
    }

    render() {
        return (
            <div>
                <Register />
                <Login />
            </div>

        )

    }
}

export default LandingPage;