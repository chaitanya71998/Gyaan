import { action, computed, observable } from 'mobx'
import { CommentModel } from '../CommentModel'

class ApprovedCommentModel extends CommentModel {
   approvedUser
   approvedUserId
   approvedUserDomain
   approvedUserDomainID
   constructor(commentObj,dashboardService) {
      super(commentObj,dashboardService)
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
}

export { ApprovedCommentModel }
