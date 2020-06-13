import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { API_SUCCESS } from '@ib/api-constants'

import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'

import { DomainDescription } from '../../common/DomainDescription'
import Posts from '../../common/Posts'
import { PostsBlock, TimelineDiv } from '../../common/styledComponents'
import { DomainDetailsBlock } from './styledComponents'

@inject('dashboardStore')
@observer
class DomainDetails extends Component {
   displayDescription = () => {
      const { domainModelObj } = this.props

      const {
         domainName,
         description,
         domainExperts,
         members,
         totalPostsCount
      } = domainModelObj.description

      return (
         <>
            <DomainDetailsBlock>
               <DomainDescription
                  domainExpertsList={domainExperts}
                  domainName={domainName}
                  domainDescription={description}
                  domainFollowers={members}
                  domainPosts={totalPostsCount}
               />
            </DomainDetailsBlock>
         </>
      )
   }
   displayPosts = () => {
      const { domainModelObj } = this.props
      const { domainPosts } = domainModelObj
     
      return domainPosts.map(post => {
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
         } = post
         return (
            <PostsBlock key={postId}>
               <Posts
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
      const { domainModelObj } = this.props
      if (domainModelObj.domainDescriptionAPIStatus === API_SUCCESS) {
         return (
            <TimelineDiv>
               {this.displayDescription()}
               {this.displayPosts()}
            </TimelineDiv>
         )
      } else {
         return <LoadingWrapperWithFailure />
      }
   }
}

export { DomainDetails }

