import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Comment } from '../../common/Comment'
import { ApprovedCommentModel } from "../../stores/models/ApprovedCommentModel"

import { Div } from './styledComponents'

interface CommentRouteProps{
   commentData: ApprovedCommentModel
   isAnswerToPost:boolean
}
@observer
class CommentRoute extends Component <CommentRouteProps>{
   render() {
      const { commentData, isAnswerToPost } = this.props

      const {
         userName,
         userProfilePic,
         commentedAt,
         commentedContent,
         replies,
         repliesCount,
         isUserReacted,
         reactionsCount,
         approvedUser,
         approvedUserDomain
      } = commentData

      return (
         <Div>
            <Comment
               profilePic={userProfilePic}
               authorName={userName}
               commentDateAndTime={commentedAt}
               comment={commentedContent}
               isUserReacted={isUserReacted}
               reactionsCount={reactionsCount}
               repliesCount={repliesCount}
               replies={replies}
               isAnswerToPost={isAnswerToPost}
               approvedUser={approvedUser}
               approvedUserDomain={approvedUserDomain}
            />
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
