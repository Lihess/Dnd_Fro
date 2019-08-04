import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  state = {
    image : [{
      id : "0",
      tags : ["풍경", "하늘", "푸른"],
      type : "jpg",
      uploadDate : "2019.2.8",
      downloade : "1594",
      kategorie : "Nature",
      like : "56",
      isLike : false,
      veiw : "45",
      size : "가로 X 세로",
      mark : true
    },{
      id : "1",
      tags : ["풍경","하늘", "태그"],
      type : "jpg",
      uploadDate : "2019.2.8",
      downloade : "1594",
      kategorie : "카테고리",
      like : "564",
      isLike : true,
      veiw : "456",
      size : "가로 X 세로",
    },{
      id : "2",
      tags : ["야자수", "하늘", "밝은"],
      type : "jpg",
      uploadDate : "2019.2.8",
      downloade : "1594",
      kategorie : "Nature",
      like : "564",
      isLike : true,
      veiw : "4558",
      size : "가로 X 세로",
      mark : true
    }]
  }
  
  render(){
    return (
      <div className="App">
        <Image 
          id = {this.state.image[0].id} 
          tags = {this.state.image[0].tags} 
          type = {this.state.image[0].type} 
          uploadDate = {this.state.image[0].uploadDate} 
          downloade = {this.state.image[0].downloade} 
          kategorie = {this.state.image[0].kategorie} 
          like = {this.state.image[0].like} 
          isLike = {this.state.image[0].isLike} 
          veiw = {this.state.image[0].veiw} 
          size = {this.state.image[0].size} 
          mark = {this.state.image[0].mark} 
          key = {this.state.image[0].id} />
      </div>
    );
  }
}

export default App;
