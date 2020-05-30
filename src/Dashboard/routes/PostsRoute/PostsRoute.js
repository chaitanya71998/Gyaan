import React, { Component } from "react"
import { observer, inject } from "mobx-react";
import { Div } from "./styledComponents";
import { Posts } from "../../components/CommonComponents/Posts/Posts";

@inject("dashboardStore")
@observer
class PostsRoute extends Component{
render(){
    const {postData} = this.props;
    const {
        postId,
        profilePic,
        userName,
        dateAndTime,
        domainName,
        title,
        tags,
        reactionsCount,
        isUserReacted,
        commentsCount,
        didPostHasAnswer,
        answer,
        postType,
        commentsLimitToShow,
        comments
    } = postData

    return(
        <Div>
            <Posts
            postId =  {postId}
            profilePic={profilePic}
            userName={userName}
            dateAndTime={dateAndTime}
            domainName={domainName}
            title={title}
            tags={tags}
            reactionsCount={reactionsCount}
            isUserReacted={isUserReacted}
            commentsCount={commentsCount}
            didPostHasAnswer={didPostHasAnswer}
            answer={answer}
            postType={postType}
            commentsLimitToShow={commentsLimitToShow}
            comments = {comments}/>
        </Div>
    )
}
}

export { PostsRoute }
/*
imageSrc= {"asd"}
            authorName= { }
            postDateAndTime= { }
            DomainName= { }
            postTitle= { }
            tags= { }
            hasReacted= { }
            reactions= { }
            comments= { } */