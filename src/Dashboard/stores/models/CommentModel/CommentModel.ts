import { action, computed, observable } from 'mobx'
import { API_SUCCESS } from "@ib/api-constants"

interface CommentedBy {
   user_id: number;
   name: string;
   profile_pic: string
}
interface CommentModelFixture {
   comment_id: any;
   commented_by:CommentedBy;
   commented_at: any;
   comment_content: any;
   is_user_reacted: any;
   replies_count: any;
   reactions_count: any
}
class CommentModel {
   id: number
   user: CommentedBy
   userId: number
   userName: string
   userProfilePic: string
   commentedAt: string
   commentedBy!: string
   @observable replies: never[]
   @observable repliesCount: number
   @observable isUserReacted: boolean
   @observable showAllReplies: boolean
   dashboardService: any
   commentedContent: string
   reactionsCount: number

   constructor(obj: CommentModelFixture, dashboardService: any) {
      this.dashboardService = dashboardService;
      this.id = obj.comment_id
      this.user = obj.commented_by
      this.userId = obj.commented_by.user_id
      this.userName = obj.commented_by.name
      this.userProfilePic = obj.commented_by.profile_pic
      this.commentedAt = obj.commented_at
      this.commentedContent = obj.comment_content
      this.isUserReacted = obj.is_user_reacted
      this.repliesCount = obj.replies_count
      this.reactionsCount = obj.reactions_count
      this.replies = []
      this.setReplies()
      this.showAllReplies = false
   }

   @action.bound
   setReplies() { }


   @action.bound
   updateReaction() {
      this.isUserReacted = !this.isUserReacted;
      this.reactionsCount = this.isUserReacted ? this.reactionsCount + 1 : this.reactionsCount - 1;
   }

   @action.bound
   async handleReaction() {
      this.updateReaction();
      const reactionStatus = await this.dashboardService.getCommentReactionStatus(this.id);
      reactionStatus === API_SUCCESS ? "" : this.updateReaction();
   }
}

export { CommentModel }
