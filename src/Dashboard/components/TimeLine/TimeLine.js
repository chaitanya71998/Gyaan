import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import Posts from '../../common/Posts'

import { Div, PostsBlock } from './styledComponents'

@inject('dashboardStore')
@observer
class TimeLine extends Component {
   displayPosts = () => {
      const { dashboardStore } = this.props
      const { postsList } = dashboardStore
      return postsList.map(post => {
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
            comments,

         } = post
         return (
            <PostsBlock key={postId}>
               <Posts
               postData={post}
                  postId={postId}
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
                  comments={comments}
               />
            </PostsBlock>
         )
      })
   }

   render() {
      const { dashboardStore } = this.props
      return <Div>{this.displayPosts()}</Div>
   }
}

export { TimeLine }
