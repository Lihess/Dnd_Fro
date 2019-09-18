import React, {Component} from 'react';
import './FollowProfile.css';
import {withRouter} from 'react-router-dom';
import { getAllInfo } from '../MyPage/MyPageFunction';
import { getMyID, addFollow, deleteFollow, isFollowInfo } from './ProfileFunction';
import { Link } from 'react-router-dom';

// 나인지 아닌지, 팔로우 기능을 추가해줘야 하는지 아닌지. 버튼 추가해주거나 홈페이지로 넘어가주거나,
class FollowProfile extends Component{
    state={
        // 정보를 받은상태인지 확인하는 거
        // informationCheck = comPonentWillMount 에서 받는 follow버튼의 정보가 받아지면 true
        informationCheck: false,
        // informationCheck2 = getInfo 에서 받는 프로필의 정보가 전부 받아지면 true
        informationCheck2: false,
        id: "",
        follow: true,
        isMe: false,
        // true : following, false : follower
        isFollow: false,
        // follow버튼의 출력을 알아내기 위해서 현재 로그인된 아이디를 상대 아이디로 받았다.
        followTargetId: "",
        profile: {
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcD70ii8eGYvUp53zPMZk3eziEr1iC16nEZLEtyXOE7kdOO7y",
            name: "",
            id: "",
            about: "",
            grade: "일반"
        }
    }
    // isFollowInfo는 targetID와 id를 비교해서 willmount에서 isFollow 값을 바꾼다.
    componentWillMount(){
        const { id, isMe, followTargetId } = this.props;
        isFollowInfo(followTargetId, id).then(res => {
            this.setState({
                isFollow: res,
                informationCheck: true
            });
        })
        this.setState({
            id: id,
            isMe: isMe,
        });
    }
    componentDidMount(){
        this.getInfo();
    }

    getInfo = () => {
        const ID = this.state.id;
        getAllInfo(ID).then(res=> {
            this.setState({
                informationCheck2: true,
                profile: {
                    ...this.state.profile,
                    id : ID,
                    name : res.nickname,
                    about : res.introduce,
                    grade : res.grade,
                    // photo: res.photo,
                    name: res.nickname
                }
            })

        })
    }

    handleClick = () => {
        const myID = getMyID();
        const { id, isFollow } = this.state;
        if(isFollow){
            deleteFollow( myID, id ).then(_=>{
                this.setState({
                    isFollow: !isFollow
                });
            });
        }
        else{
            addFollow( myID, id ).then(_=>{
                this.setState({
                    isFollow: !isFollow
                });
            });
        }
    }

    renderProfile = () => {
        const {informationCheck,informationCheck2} = this.state;
        if(informationCheck && informationCheck2){
            const { id, isMe, isFollow } = this.state;
            const { photo, name } = this.state.profile;
            return <div className = "FollowProfile">
                <div className = "FollowProfile-Column">
                    <Link className= "FollowProfile-Column" to = {`/${id}`}>
                        <div className = "FollowProfile-ProfileImage" onClick = {() => this.props.history.push(`/Profile/${id}`)}>
                            <ProfileImage photo = {photo} alt = {name}/>
                        </div>
                        <div className = "FollowProfile-Info">
                            <span className = "Nickname"> {name} </span>
                            <span className = "Id"> {"@" + id} </span>
                        </div>
                    </Link>
                    { isFollow != null &&
                        <div className = "FollowProfile-Follow-Btn">
                            <FollowButton
                                isMe = {isMe}
                                isFollow = {isFollow}
                                handleClick = {this.handleClick}
                                />
                        </div>
                    }
                </div>
            </div>
        }
        else
            return null;
    }

    render(){
        return this.renderProfile();
    }
}

function ProfileImage({photo, alt}){
    return (
        <img src = {photo ? photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcD70ii8eGYvUp53zPMZk3eziEr1iC16nEZLEtyXOE7kdOO7y"} alt = {alt}></img>
    ); // 프로필 사진이 없으면 검게 나오도록, 후에 사진 id로 대체하여 데이터랑 연결될 예정
}

const FollowButton = ({ isMe, isFollow, handleClick}) => {
    if(!isMe)
        return(
            <button className = {isFollow === true ? "Following" : "Follow"} onClick = {handleClick}>
                {isFollow  === true? "Following" : "Follow"}
            </button>
        );
    else
        return null;
}

export default withRouter(FollowProfile);
