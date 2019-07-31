import React, {Component} from 'react';

class Profile extends Component {
    render() { 
        console.log(this.props.match.params.id);
        return ( 
            <h1> hello {this.props.match.params.id} </h1>
        );
    }
}
 
export default Profile;