import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component {
    state = {
        nickname : '',
        ID : '',
        email: '',
        auth: '',
        message : '',
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            ID : decoded.ID,
            nickname: decoded.nickname,
            email: decoded.email,
        })
    }

    render() {
        return (
            <div>
                <h1>PROFILE</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>nickname</td>
                            <td>{this.state.nickname}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.ID}</td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>{this.state.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Profile;