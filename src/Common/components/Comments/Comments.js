import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { AiOutlineHeart } from 'react-icons/ai'

import { ImageElement } from '../../../../components/common/ImageElement'

import { Div, Header, Footer, ReactionAndComments } from './styledComponents'
import {
   Typo14DarkBlueGreyHKGroteskSemiBold,
   Typo16BrightBlueHKGroteskBold,
   Typo14SteelHKGroteskRegular,
   Typo18DarkBlueGreyHKGroteskMedium,
   Typo12DarkBlueGreyHKGroteskRegular
} from '../../../../Common/style_guide/Typos'

@observer
class Comments extends Component {
   answerToPost = () => {
      const { answer } = this.props
      if (answer) {
         return (
            <Div>
               <ImageElement
                  src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/aaee9464-2926-4c59-9a80-223974c0b6c7.svg'
                  alt='tick'
               />
               <Typo12DarkBlueGreyHKGroteskRegular>
                  Approved by
               </Typo12DarkBlueGreyHKGroteskRegular>
               <Typo16BrightBlueHKGroteskBold>{`{${'author'}(${'DomainName'})`}</Typo16BrightBlueHKGroteskBold>
            </Div>
         )
      }
      return <Div></Div>
   }
   loadOtherComments = () => {
      {
         comments
      }
   }
   render() {
      const {
         imageSrc,
         authorName,
         commentDateAndTime,
         comment,
         answer,
         hasReacted,
         reactions,
         comments,
         handleReaction
      } = this.props

      return (
         <Div>
            <Header>
               <ImageElement src={imageSrc} alt={authorName[0]} />
               <Typo14DarkBlueGreyHKGroteskSemiBold>
                  {authorName} .{' '}
                  <Typo14SteelHKGroteskRegular>
                     . {commentDateAndTime}
                  </Typo14SteelHKGroteskRegular>
               </Typo14DarkBlueGreyHKGroteskSemiBold>
            </Header>
            <Typo18DarkBlueGreyHKGroteskMedium>
               {comment}{' '}
            </Typo18DarkBlueGreyHKGroteskMedium>
            <Footer hasAnswer={answer ? true : false}>
               {this.answerToPost()}
               <Div>
                  <ReactionAndComments>
                     <AiOutlineHeart color={hasReacted ? 'red' : ''} />
                     {reactions}{' '}
                     <ImageElement src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/e185f501-5dde-45ad-9f10-0cbeea737ee4.svg' />
                     {comments}
                  </ReactionAndComments>
               </Div>
            </Footer>
            {this.loadOtherComments()}
         </Div>
      )
   }
}

export { Comments }
