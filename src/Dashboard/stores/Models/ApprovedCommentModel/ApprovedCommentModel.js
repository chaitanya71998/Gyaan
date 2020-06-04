import { action, computed, observable } from 'mobx'
import { CommentModel } from '../CommentModel'

class ApprovedCommentModel extends CommentModel {
   approvedUser
   approvedUserId
   approvedUserDomain
   approvedUserDomainID
   constructor(commentObj) {
      super(commentObj)
      this.init(commentObj)
   }

   @action.bound
   init(commentObj) {
      const { approved_by } = commentObj
      const { name, user_id, domain_name, domain_id } = approved_by
      this.approvedUser = name
      this.approvedUserId = user_id
      this.approvedUserDomain = domain_name
      this.approvedUserDomainID = domain_id
   }

   @action.bound
   setReplies() {
      this.commentData.replies.forEach(reply => {
         this.replies.set(reply.reply_id, reply)
      })
   }

   @action.bound
   onClickReaction() {
      this.isUserReacted = !this.isUserReacted
      /**API call for reaction set */
   }

   @action.bound
   onClickApprovedUser() {
      /**API call for that userAnd redirect that user page */
   }

   @action.bound
   onClickShowAll() {
      this.showAllReplies = !this.showAllReplies
   }
   @computed get repliesForComments() {
      if (this.showAllReplies) {
         return [...this.replies]
      }
      return [...this.replies][0]
   }
}

export { ApprovedCommentModel }
