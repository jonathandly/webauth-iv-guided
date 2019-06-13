import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './helpers/api';

class Signup extends React.Component {
    state = {
        fullname: '',
        username: '',
        password: '',
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        // console.log(this.state);

        try {
            const { fullname, username, password } = this.state;

            // const endpoint = 'http://localhost:5000/api/auth/login';
            const result = await api.post('/auth/register', {
                fullname,
                username,
                password
            });
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
                <h3>Signup</h3>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        onChange={this.handleChange}
                        value={this.state.fullname}
                    />
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
                    <button type="submit">Sign Up</button>
                </form>
            </>
        )
    }
}

export default withRouter(Signup);
