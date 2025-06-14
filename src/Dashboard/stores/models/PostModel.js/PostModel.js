import { API_SUCCESS, API_INITIAL } from '@ib/api-constants'
import { action, observable } from 'mobx'

import { CommentModel } from '../CommentModel'
import { ApprovedCommentModel } from '../ApprovedCommentModel'

class PostModel {
   @observable tags
   @observable postData
   @observable answer
   @observable comments
   @observable commentsLimitToShow
   @observable isUserReacted
   @observable didPostHasAnswer
   @observable reactionsCount

   constructor(obj, dashboardService) {
      this.postData = obj
      this.dashboardService = dashboardService
      this.postId = obj.post_id
      this.userName = obj.creater.name
      this.profilePic = obj.creater.profile_pic;
      (this.dateAndTime = obj.created_at),
         (this.title = obj.title),
         (this.content = obj.post_content),
         (this.domainName = obj.domain.domain_name),
         (this.domainId = obj.domain.domain_id),
         (this.tags = obj.tags.map(tag => {
            return {
               tagName: tag.tag_name,
               tagId: tag.tag_Id
            }
         }))
      this.reactionsCount = obj.reactions_count
      this.isUserReacted = obj.is_user_reacted
      this.commentsCount = obj.comment_content
      this.didPostHasAnswer = Object.keys(obj.answer).length ? true : false
      this.userReactionAPIStatus = API_INITIAL

      this.userReactionAPIError = null

      if (this.didPostHasAnswer) {
         this.answer = new ApprovedCommentModel(obj.answer,this.dashboardService)
         this.postType = 'question'
         this.commentsLimitToShow = 1
      } else {
         this.postType = 'default'
         this.commentsLimitToShow = 2
      }
      this.comments = []
      this.setComments()
   }
   @action.bound
   setComments() {
      this.postData.comments.map(comment =>
         this.comments.push(new CommentModel(comment,this.dashboardService))
      )
   }
   // @action.bound
   // userReactedToPost() {
   //    this.userReactedToPost = !this.userReactedToPost
   //    this.reactionsCount = this.userReactedToPost
   //       ? this.reactionsCount++
   //       : this.reactionsCount--
   // }


   @action.bound
   updateReaction(){
      this.isUserReacted = !this.isUserReacted;
      this.reactionsCount = this.isUserReacted?this.reactionsCount+1:this.reactionsCount-1;
   }
   @action.bound
  async handleReaction(){
      this.updateReaction();
      const reactionStatus = await this.dashboardService.getPostReactionStatus(this.postId);
      reactionStatus===API_SUCCESS ?"":this.updateReaction();
   }
}

export default PostModel

// this.didPostHasAnswer = Object.keys(obj.answer).length? true : false
