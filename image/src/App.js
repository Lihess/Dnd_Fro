import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';
import ImageInfo from './ImageInfo';

const im = ["https://postfiles.pstatic.net/MjAxOTA3MzBfNyAg/MDAxNTY0NDkxMzU1MjYw.6PsoCMM-IhbyMp28iN-PGLiPRgFhUk85GP-iLWcQLsIg.qG9gNv0c480J1n8PkTKyD8SqKvkheTeFjVtuphz3CaEg.JPEG.she2325/7.jpg?type=w966",
"https://postfiles.pstatic.net/MjAxOTA3MzBfODgg/MDAxNTY0NDkxMzU0OTY3.1VS0WEhoUmxz31Yv_Fqn8hTz0b_PI67lgDJsn3u3igcg.IeT-JpGIgHGKxUR-exblUdRKTSHZCJhaHNFQMcqxzEMg.JPEG.she2325/8.jpg?type=w966",
"https://postfiles.pstatic.net/MjAxOTA3MzBfMTEg/MDAxNTY0NDkxMzU0ODY3.6eVSLBjwuAl2I_PZJl-rETOeIlCPLoH6Zd3BsRXu1LMg.WbPXfoyS3ACPaWJ73skzmsjnD1eHClaVgbpxAEw2cJ4g.JPEG.she2325/9.jpg?type=w966",
"https://postfiles.pstatic.net/MjAxOTA3MzBfMjA2/MDAxNTY0NDkxMzU1NDQ2.vY704r4pmlsPx_ijWiAWMCbNUBw101-pRDzUxh7vxX8g.K9VsOmd0BkLHn73-GrF2nLzh4n1KzZiH2eoPfKHiWOAg.JPEG.she2325/11.jpg?type=w966"];


class App extends Component {
  state = {
    image : [{
      id : "0",
      tags : ["풍경", "하늘", "푸른"],
      registrant : {
        profileImage : im[0],
        nickname : "이 은비",
        id : "she2325",
        follow : false
      },
      type : "jpg",
      uploadDate : "2019.2.8",
      downloade : "1594",
      kategorie : "Nature",
      like : "56",
      isLike : false,
      veiw : "45",
      size : "가로 X 세로",
      mark : true,
      paid : true
    },{
      id : "1",
      tags : ["풍경","하늘", "태그"],
      registrant : {
        profileImage : null,
        nickname : "Lihess",
        id : "lihess"
      },
      type : "jpg",
      uploadDate : "2019.2.8",
      downloade : "1594",
      kategorie : "카테고리",
      like : "564",
      isLike : true,
      veiw : "456",
      size : "가로 X 세로",
      paid : false
    },{
      id : "2",
      tags : ["야자수", "하늘", "밝은"],
      registrant : {
        profileImage : im[3],
        nickname : "Hong",
        id : "hong",
        follow : true
      },
      type : "jpg",
      uploadDate : "2019.2.8",
      downloade : "1594",
      kategorie : "Nature",
      like : "564",
      isLike : true,
      veiw : "4558",
      size : "가로 X 세로",
      mark : true,
      paid : false
    }]
  }
  
  render(){
    return (
      <div className="App">
        <div className = "App-Left">
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
        <div className = "App-Right">
          <ImageInfo 
            registrant = {this.state.image[0].registrant}
            paid = {this.state.image[0].paid}
            type = {this.state.image[0].type}
            size = {this.state.image[0].size}
            uploadDate = {this.state.image[0].uploadDate}
            downloade = {this.state.image[0].downloade}
            kategorie = {this.state.image[0].kategorie}
            tags = {this.state.image[0].tags}/>
        </div>
      </div>
    );
  }
}

export default App;
