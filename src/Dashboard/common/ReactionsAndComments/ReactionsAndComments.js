import React, { Component } from 'react'
import { FiHeart } from 'react-icons/fi'

import { Thumbnail } from '../../../Common/components/Thumbnail'

import { PostReactions, Numbers } from './styledComponents'
class ReactionsAndComments extends Component {
   render() {
      const { isUserReacted, reactionsCount, comments,handleReaction } = this.props
      return (
         <PostReactions>
            {isUserReacted ?<AiFillHeart onClick={handleReaction} color="red"/>:<FiHeart onClick={handleReaction} />}
            <Numbers>{reactionsCount}</Numbers>
            <Thumbnail src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/e185f501-5dde-45ad-9f10-0cbeea737ee4.svg' />
            <Numbers>
               {comments.length} {comments.length > 1 ? 'comments' : 'comments'}
            </Numbers>
         </PostReactions>
      )
   }
}

export { ReactionsAndComments }
