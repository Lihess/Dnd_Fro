import React, {Component} from 'react';
import './img.css';

class img extends Component {
    
    render() { 
        console.log(this.props.match.params.image);
        return ( 
            <img src = {this.props.match.params.image} alt = ""/>
            // 받는 걸 이미지 id로 받아야함
        );
    }
}
 
export default img;