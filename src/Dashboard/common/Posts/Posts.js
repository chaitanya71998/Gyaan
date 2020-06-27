import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { AiOutlineReload } from 'react-icons/ai'
import { withRouter } from 'react-router-dom'
import { observable } from 'mobx'
import { ImageElement } from '../../../Common/components/ImageElement'
import {
   Typo12BrightBlueRubikRegular,
   Typo24DarkBlueGreyHKGroteskBold,
   Typo12DarkBlueGreyHKGrosteskSemiBold
} from '../../../Common/style_guide/Typos'

import strings from '../../i18n/strings.json'

import { PostHeader } from '../PostHeader'
import { EnterComment } from '../EnterComment'
import { ReactionsAndComments } from '../ReactionsAndComments'
import { Comment } from '../Comment'

import {
   Div,
   SeeAllComments,
   PostTitle,
   PostDetails,
   PostComments,
   Tags,
   Footer,
   NoCommmentsBlock,
   TagsForPosts
} from './styledComponents'

const { seeAllComments, noComments, seeLessComments } = strings
const reloadIconSize = 12

@inject('dashboardStore')
@observer
class Posts extends Component {
   @observable isToShowAllComments
   constructor(props) {
      super(props)
      this.isToShowAllComments = false
   }

   onClickPost = event => {
      const { postId, dashboardStore } = this.props
      const { currentDomainId } = dashboardStore
      currentDomainId
         ? this.props.history.push(
              `/followingDomain/${currentDomainId}/post/${postId}`
           )
         : this.props.history.push(`/allDomainPosts/post/${postId}`)
   }
   onClickShowAllComments = event => {
      this.isToShowAllComments = !this.isToShowAllComments
   }

   tagsToPost = () => {
      const { tags } = this.props
      if (tags.length) {
         return (
            <TagsForPosts>
               {tags.map(tag => {
                  return (
                     <Tags key={tag}>
                        <ImageElement
                           src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/bcbd3c61-3d01-44df-9fa3-24bc8e8872b4.svg'
                           alt='tag'
                        />
                        <Typo12BrightBlueRubikRegular>
                           {tag.tagName}
                        </Typo12BrightBlueRubikRegular>
                     </Tags>
                  )
               })}
            </TagsForPosts>
         )
      }
      return <Div></Div>
   }
   displayComments = () => {
      const { comments } = this.props
      if (comments.length > 0)
         return (
            <PostComments>
               {this.displayAnswer()}
               {this.loadCommentsList()}
               <SeeAllComments onClick={this.onClickShowAllComments}>
                  <Typo12DarkBlueGreyHKGrosteskSemiBold>
                     {this.isToShowAllComments
                        ? seeLessComments
                        : seeAllComments}
                  </Typo12DarkBlueGreyHKGrosteskSemiBold>
                  <AiOutlineReload size={reloadIconSize} />
               </SeeAllComments>
            </PostComments>
         )
      return (
         <NoCommmentsBlock>
            <Typo12DarkBlueGreyHKGrosteskSemiBold children={noComments} />
         </NoCommmentsBlock>
      )
   }
   displayAnswer = () => {
      const { didPostHasAnswer, answer } = this.props
      if (didPostHasAnswer) {
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
            approvedUserDomain,
            handleReaction
         } = answer

         return (
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
                  isAnswerToPost={didPostHasAnswer}
                  approvedUser={approvedUser}
                  approvedUserDomain={approvedUserDomain}
                  handleCommentReaction={handleReaction}
               />
            </Div>
         )
      } else {
         return <></>
      }
   }

   loadCommentsList = () => {
      const { commentsLimitToShow, comments } = this.props

      const numberLimit = this.isToShowAllComments
         ? comments.length
         : commentsLimitToShow
      const commentsList = comments.map(comment => {
         const {
            id,
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
            approvedUserDomain,
            handleReaction
         } = comment

         return (
            <Div>
               <Comment
                  key={id}
                  id={id}
                  profilePic={userProfilePic}
                  authorName={userName}
                  commentDateAndTime={commentedAt}
                  comment={commentedContent}
                  hasReacted={isUserReacted}
                  reactionsCount={reactionsCount}
                  repliesCount={repliesCount}
                  replies={replies}
                  isAnswerToPost={false}
                  approvedUser={approvedUser}
                  postDomain={approvedUserDomain}
                  handleCommentReaction={handleReaction}
               />
            </Div>
         )
      })
      return commentsList.slice(0, numberLimit)
   }
   render() {
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
         comments,
         handleReaction
      } = this.props

      return (
         <Div id={postId}>
            <PostDetails>
               <PostHeader
                  profilePic={profilePic}
                  userName={userName}
                  dateAndTime={dateAndTime}
                  domainName={domainName}
               />
               <PostTitle onClick={this.onClickPost}>
                  <Typo24DarkBlueGreyHKGroteskBold>
                     {title}
                  </Typo24DarkBlueGreyHKGroteskBold>
               </PostTitle>
               <Footer hasTags={tags.length ? true : false}>
                  {this.tagsToPost()}
                  <ReactionsAndComments
                     isUserReacted={isUserReacted}
                     reactionsCount={reactionsCount}
                     comments={comments}
                     handleReaction={handleReaction}
                  />
               </Footer>
            </PostDetails>
            {this.displayComments()}
            <EnterComment />
         </Div>
      )
   }
}

export default withRouter(Posts)
