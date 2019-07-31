import React, {Component} from 'react';
import logo from './logo.svg';
import { Route, Router } from "react-router-dom";
import Profile from './Profile';
import './App.css';
import ProfileSmall from './ProfileSmall';
import image from './img';

const im = ["https://postfiles.pstatic.net/MjAxOTA3MzBfNyAg/MDAxNTY0NDkxMzU1MjYw.6PsoCMM-IhbyMp28iN-PGLiPRgFhUk85GP-iLWcQLsIg.qG9gNv0c480J1n8PkTKyD8SqKvkheTeFjVtuphz3CaEg.JPEG.she2325/7.jpg?type=w966",
"https://postfiles.pstatic.net/MjAxOTA3MzBfODgg/MDAxNTY0NDkxMzU0OTY3.1VS0WEhoUmxz31Yv_Fqn8hTz0b_PI67lgDJsn3u3igcg.IeT-JpGIgHGKxUR-exblUdRKTSHZCJhaHNFQMcqxzEMg.JPEG.she2325/8.jpg?type=w966",
"https://postfiles.pstatic.net/MjAxOTA3MzBfMTEg/MDAxNTY0NDkxMzU0ODY3.6eVSLBjwuAl2I_PZJl-rETOeIlCPLoH6Zd3BsRXu1LMg.WbPXfoyS3ACPaWJ73skzmsjnD1eHClaVgbpxAEw2cJ4g.JPEG.she2325/9.jpg?type=w966",
"https://postfiles.pstatic.net/MjAxOTA3MzBfMjA2/MDAxNTY0NDkxMzU1NDQ2.vY704r4pmlsPx_ijWiAWMCbNUBw101-pRDzUxh7vxX8g.K9VsOmd0BkLHn73-GrF2nLzh4n1KzZiH2eoPfKHiWOAg.JPEG.she2325/11.jpg?type=w966"];


class App extends Component{
  state = {
    profile : [{
      profileImage : im[0],
      nickname : "이 은비",
      id : "she2325",
      images : [{
        image : im[2],
        alt : "2"},{
        image : im[1],
        alt : "1"}]
    },{
      profileImage : null,
      nickname : "Lihess",
      id : "lihess",
      images : [{
        image : im[0],
        alt : "0"},{
        image : im[1],
        alt : "1"},{
        image : im[3],
        alt : "3"}],
      follow : true
    },{
      profileImage : im[3],
      nickname : "Hong",
      id : "hong",
      images : [],
      follow : false
    },{
      profileImage : im[2],
      nickname : "Honger",
      id : "honger",
      images : [{
        image : im[0],
        alt : "0"},{
        image : im[3],
        alt : "3"}],
      follow : false
    }]
  };

_renderProfile = () =>{
  const profile = this.state.profile.map((profile) => {
    return <ProfileSmall
    profileImage = {profile.profileImage}
    nickname = {profile.nickname}
    id = {profile.id}
    images = {profile.images}
    follow = {profile.follow}
    key = {profile.id}
    />
  })
  return profile;
}

  render(){
    return (
      <div className="App">
        {this._renderProfile()}
        <Route path = "/Profile/:id" component = {Profile}/>
        <Route path = "/img/:image" component = {image}/>
      </div>
    );
  }
}

export default App;
