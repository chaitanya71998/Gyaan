import React, { Component } from "react"
import { observer } from "mobx-react";
import { Div } from "./styledComponents";
import { Comment } from "../../common/Comment";
import { AiFillCodeSandboxCircle } from "react-icons/ai";


@observer
class CommentRoute extends Component{
render(){
    const {commentData,isAnswerToPost}=this.props;
   
const {
userName,
userProfilePic,
commentedAt,
commentedContent,
replies,
repliesCount,
isUserReacted,
showAllReplies,
reactionsCount,
approvedUser,
approvedUserDomain}
= commentData;

    return(
        <Div>        
            <Comment
            profilePic={userProfilePic}
            authorName={userName}
            commentDateAndTime={commentedAt}
            comment={commentedContent}
            hasReacted={isUserReacted}
            reactionsCount={reactionsCount}
            repliesCount={repliesCount}
            replies={replies}
            isAnswerToPost={isAnswerToPost}
            approvedUser={approvedUser}
            postDomain={approvedUserDomain}/>
            
        </Div>
    )
}
}

export { CommentRoute }
/*
<Comment
            profilePic={}
            authorName={}
            commentDateAndTime={}
            comment={}
            hasReacted={}
            reactionsCount={}
            repliesCount={}
            replies={}
            isAnswerToPost={}
            approvedUser={}
            postDomain={}/>
            profilePic={}
            authorName={}
            commentDateAndTime={}
            comment={}
            hasReacted={}
            reactionsCount={}
            repliesCount={}
            replies={}
            isAnswerToPost={}
            approvedUser={}
            postDomain={}


        profilePic,
        authorName,
        commentDateAndTime,
        comment,
        isAnswerToPost,
        hasReacted,
        reactionsCount,
        commentsCount,
        approvedUser,
        postDomain,*/