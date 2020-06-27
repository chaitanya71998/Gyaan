import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { AiFillHeart } from 'react-icons/ai'

import {
   Typo12DarkBlueGreyHKGroteskRegular,
   Typo16BrightBlueHKGroteskBold,
   Typo14DarkBlueGreyHKGroteskSemiBold,
   Typo18DarkBlueGreyHKGroteskMedium
} from '../../../Common/style_guide/Typos'

import {
   Div,
   CommentBlock,
   AnswerTypeComment,
   CommentHeader,
   DateAndTime,
   Footer,
   Numbers,
   CommentReactions,
   CommentData,
   CommenterDetails
} from './styledComponents'
import { Thumbnail } from '../../../Common/components/Thumbnail'
import { SmallThumbnail } from '../../../Common/components/Thumbnail/styledComponents'
import { FiHeart } from 'react-icons/fi'
import { CommentModel } from '../../stores/models/CommentModel'
import { ApprovedCommentModel } from '../../stores/models/ApprovedCommentModel'
import GreenCheckCirele from '../../../Common/components/Icons/GreenCheckCircle'

// interface CommentProps {
//  props:ApprovedCommentModel
// }

@observer
class Comment extends Component {
   answerToPost = () => {
      const { isAnswerToPost, approvedUser, approvedUserDomain } = this.props
      if (isAnswerToPost) {
         return (
            <AnswerTypeComment>
               <GreenCheckCirele/>
               <Typo12DarkBlueGreyHKGroteskRegular>
                  Approved by
                  <Typo16BrightBlueHKGroteskBold>{`${approvedUser}(${approvedUserDomain})`}</Typo16BrightBlueHKGroteskBold>{' '}
               </Typo12DarkBlueGreyHKGroteskRegular>
            </AnswerTypeComment>
         )
      }
      return <Div></Div>
   }

   render() {
      const {
         profilePic,
         authorName,
         commentDateAndTime,
         comment,
         isAnswerToPost,
         hasReacted,
         reactionsCount,
         repliesCount,
         replies,
         handleCommentReaction
      } = this.props
      return (
         <CommentBlock>
            <CommentHeader>
               <SmallThumbnail src={profilePic} alt={authorName[0]} />
               <CommenterDetails>
                  <Typo14DarkBlueGreyHKGroteskSemiBold>
                     {authorName} .{' '}
                     <DateAndTime>. {commentDateAndTime}</DateAndTime>
                  </Typo14DarkBlueGreyHKGroteskSemiBold>
               </CommenterDetails>
            </CommentHeader>
            <CommentData>
               <Typo18DarkBlueGreyHKGroteskMedium>
                  {comment}{' '}
               </Typo18DarkBlueGreyHKGroteskMedium>
            </CommentData>
            <Footer isAnswerToPost={isAnswerToPost ? true : false}>
               {this.answerToPost()}
               <CommentReactions>
                  {hasReacted ? (
                     <AiFillHeart onClick={handleCommentReaction} color='red' />
                  ) : (
                     <FiHeart onClick={handleCommentReaction} />
                  )}
                  <Numbers>{reactionsCount} </Numbers>
                  <Thumbnail src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/e185f501-5dde-45ad-9f10-0cbeea737ee4.svg' />
                  <Numbers>
                     {' '}
                     {repliesCount} {repliesCount > 1 ? 'comments' : 'comment'}
                  </Numbers>
               </CommentReactions>
            </Footer>
         </CommentBlock>
      )
   }
}

export { Comment }
