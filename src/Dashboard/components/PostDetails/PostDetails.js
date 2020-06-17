import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { AiFillTag, AiOutlineReload } from 'react-icons/ai'

import {
   Typo32BlackHKGrostek,
   Typo14SteelHKGroteskRegular,
   Typo14DarkBlueGreyHKGroteskRegular,
   Typo12BrightBlueRubikRegular,
   Typo12DarkBlueGreyHKGrosteskSemiBold
} from '../../../Common/style_guide/Typos'

import strings from '../../i18n/strings.json'
import { EnterComment } from '../../common/EnterComment'
import { Comment } from '../../common/Comment'
import { colors } from '../../../Common/style_guide/themes/Colors'

import {
   Div,
   Tags,
   PostContainer,
   PostTitle,
   PostedDatedAndTime,
   PostTags,
   PostDescription,
   CommentsBlock,
   AnswerPost,
   PostDetailsBlock,
   SeeAllComments,
   TagsBlock
} from './styledComponents'

const { seeAllComments, noComments, seeLessComments } = strings

const { bright_blue } = colors

@observer
class PostDetails extends Component {

   displayTags = () => {
      const { postData } = this.props
      const { tags } = postData
      if (tags.length) {
         return (
            <TagsBlock>
               {tags.map(tag => {
                  return (
                     <Tags key={tag.tagId}>
                        <AiFillTag size={12} color={bright_blue} />
                        <Typo12BrightBlueRubikRegular>
                           {tag.tagName}
                        </Typo12BrightBlueRubikRegular>
                     </Tags>
                  )
               })}
            </TagsBlock>
         )
      }
      return <Div></Div>
   }
   displayComments = () => {
      const { postData } = this.props
      const { comments } = postData
      if (comments.length > 0)
         return (
            <Div>
               {this.displayAnswer()}
               {this.loadCommentsList()}
            </Div>
         )
      return (
         <>
            <Typo12DarkBlueGreyHKGrosteskSemiBold children={noComments} />
         </>
      )
   }
   displayAnswer = () => {
      const { postData } = this.props
      const { didPostHasAnswer, answer } = postData
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
            <AnswerPost>
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
                  postDomain={approvedUserDomain}
                  handleCommentReaction = {handleReaction}
               />
            </AnswerPost>
         )
      } else {
         return <></>
      }
   }

   loadCommentsList = () => {
      const { postData } = this.props
      const { comments } = postData
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
                  handleCommentReaction = {handleReaction}
               />
            </Div>
         )
      })
      return commentsList
   }
   render() {
      const { postData } = this.props
      const { title, dateAndTime, content } = postData
      if (postData) {
         return (
            <PostContainer>
               <PostDetailsBlock>
                  <PostTitle>
                     <Typo32BlackHKGrostek>{title}</Typo32BlackHKGrostek>
                  </PostTitle>
                  <PostedDatedAndTime>
                     <Typo14SteelHKGroteskRegular>
                        {dateAndTime}
                     </Typo14SteelHKGroteskRegular>
                  </PostedDatedAndTime>

                  <PostTags>{this.displayTags()}</PostTags>
                  <PostDescription>
                     <Typo14DarkBlueGreyHKGroteskRegular>
                        {content}
                     </Typo14DarkBlueGreyHKGroteskRegular>
                  </PostDescription>
               </PostDetailsBlock>
               <CommentsBlock>{this.displayComments()}</CommentsBlock>
               <EnterComment />
            </PostContainer>
         )
      }
      return <p>Loading...</p>
   }
}

export { PostDetails }
