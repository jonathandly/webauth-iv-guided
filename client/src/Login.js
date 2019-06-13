import React from 'react';
import { withRouter } from 'react-router-dom';

import api from './helpers/api';

class Login extends React.Component {

    state = {
        username: '',
        password: '',
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const { username, password } = this.state;

            // const endpoint = 'http://localhost:5000/api/auth/login';
            const result = await api.post('/auth/login', {
                username,
                password
            });
            
            // document.cookie = `token=${result.data.token}`;
            localStorage.setItem('token', result.data.token);
            this.props.history.push('/users');
        } catch(err) {
            console.error(err);
        }

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <>
                <h3>Login</h3>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        onChange={this.handleChange} 
                        placeholder="Username" 
                        value={this.state.username}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        onChange={this.handleChange} 
                        value={this.state.password}
                    />
                    <button type="submit">Login</button>
                </form>
            </>
        )
    }
}

export default withRouter(Login);
