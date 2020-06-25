import { action, computed, observable } from 'mobx'
import { CommentModel } from '../CommentModel'
import { ApprovedBy } from "../../types"

class ApprovedCommentModel extends CommentModel {
   approvedUser!: string
   approvedUserId!: any
   approvedUserDomain!: any
   approvedUserDomainID!: any
   constructor(commentObj: any,dashboardService: any) {
      super(commentObj,dashboardService)
      this.init(commentObj)
   }

   @action.bound
   init(commentObj: { approved_by: ApprovedBy }) {
      const { approved_by } = commentObj
      const { name, user_id, domain_name, domain_id } = approved_by
      this.approvedUser = name
      this.approvedUserId = user_id
      this.approvedUserDomain = domain_name
      this.approvedUserDomainID = domain_id
   }
}

export { ApprovedCommentModel }
