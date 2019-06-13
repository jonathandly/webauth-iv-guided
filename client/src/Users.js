import React from 'react';
import api from './helpers/api';
import withAuth from './helpers/auth';

class Users extends React.Component {
    state = {
        users: [],
    }
    async componentDidMount() {
        try {
            const result = await api.get('/users');
            // console.log(result);
            this.setState({
                users: result.data,
            })
        } catch(err) {
            // if(err.response.status === 401 || err.response.status === 403) {
            //     this.props.history.push('/login');
            // } else {
            //     console.error(err);
            // }
            console.error(err);
        }
    }
    render() {
        return (
            <>
                <h3>Users</h3>

                <ul>
                    {this.state.users.map((user, i) => {
                        return <li key={i}>{user.fullname}</li>
                    })}
                </ul>
            </>
        )
    }
}

export default withAuth(Users);
