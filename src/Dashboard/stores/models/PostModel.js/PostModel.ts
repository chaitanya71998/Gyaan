import { API_SUCCESS, API_INITIAL } from '@ib/api-constants'
import { action, observable } from 'mobx'

import { CommentModel } from '../CommentModel'
import { ApprovedCommentModel } from '../ApprovedCommentModel'
import { DomainTagsFixture } from "../../DashboardStore/DashboardStore"


interface PostFixture {
   post_id: number
   creater:PostCreater;
   created_at: string;
   title: string;
   post_content: string;
   domain: {
      domain_name: string;
      domain_id: number;
   };
   tags: DomainTagsFixture[];
   reactions_count: number;
   is_user_reacted: boolean;
   comment_content: number;
   answer: any;
   comments: any
}
interface PostCreater {
   name: string;
   profile_pic: string;
}

class PostModel {
   @observable tags: any
   @observable postData: { comments: any[] }
   @observable answer!: ApprovedCommentModel
   @observable comments: CommentModel[]
   @observable commentsLimitToShow: number
   @observable isUserReacted: boolean
   @observable didPostHasAnswer: boolean
   @observable reactionsCount: number
   dashboardService: any
   postId: number
   userName: string
   profilePic: string
   dateAndTime: string
   title: string
   content: string
   domainName: string
   domainId: number
   commentsCount: number
   userReactionAPIStatus: number
   userReactionAPIError: null
   postType: string

   constructor(obj: PostFixture, dashboardService: { domainTypesAPI: (arg0: {}) => any; getAllDomainsPostsAPI: () => any; getDomainRelatedTags: (arg0: any) => any }) {
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
         (this.tags = obj.tags.map((tag:DomainTagsFixture) => {
            return {
               tagName: tag.tag_name,
               tagId: tag.tag_id
            }
         }))
      this.reactionsCount = obj.reactions_count
      this.isUserReacted = obj.is_user_reacted
      this.commentsCount = obj.comment_content
      this.didPostHasAnswer = Object.keys(obj.answer).length ? true : false
      this.userReactionAPIStatus = API_INITIAL

      this.userReactionAPIError = null

      if (this.didPostHasAnswer) {
         this.answer = new ApprovedCommentModel(obj.answer, this.dashboardService)
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
      this.postData.comments.map((comment) =>
         this.comments.push(new CommentModel(comment, this.dashboardService))
      )
   }

   @action.bound
   updateReaction() {
      this.isUserReacted = !this.isUserReacted;
      this.reactionsCount = this.isUserReacted ? this.reactionsCount + 1 : this.reactionsCount - 1;
   }
   @action.bound
   async handleReaction() {
      this.updateReaction();
      const reactionStatus = await this.dashboardService.getPostReactionStatus(this.postId);
      reactionStatus === API_SUCCESS ? "" : this.updateReaction();
   }
}

export default PostModel

