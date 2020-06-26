import { API_SUCCESS, API_INITIAL } from '@ib/api-constants'
import { action, observable } from 'mobx'

import { TagObject, TagModel, PostObject, CommentObject } from "../../types"

import { CommentModel } from '../CommentModel'
import { ApprovedCommentModel } from '../ApprovedCommentModel'


class PostModel {
   @observable tags:TagModel[]
   @observable postData: PostObject
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

   constructor(obj: PostObject, dashboardService: { domainTypesAPI: (arg0: {}) => any; getAllDomainsPostsAPI: () => any; getDomainRelatedTags: (arg0: any) => any }) {
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
         (this.tags = obj.tags.map((tag: TagObject) => {
            return {
               tagName: tag.tag_name,
               tagId: tag.tag_id
            }
         }))
      this.reactionsCount = obj.reactions_count
      this.isUserReacted = obj.is_user_reacted
      this.commentsCount = obj.comments_count
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
      this.postData.comments.map((comment:CommentObject) =>
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

