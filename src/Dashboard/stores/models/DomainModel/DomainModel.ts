import { observable, action, computed, reaction } from 'mobx'
import PostModel from '../PostModel.js/index.js'
import { API_INITIAL, API_SUCCESS } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { DashboardService } from "../../../services/DashboardService/index.js"

interface DomainRequestList {
   username: string
   userId: number
}
class DomainModel {
   @observable domainPosts!: PostModel[]
   @observable domainPostsAPIStatus!: number
   @observable domainPostsAPIError: null
   @observable domainDescription!: {
      requests?: any
      domain_name?: any
      description?: any
      domain_experts?: any
      pending_for_review_count?: any
      members?: any
      total_posts_count?: any
      stars_count?: any
      total_requests_count?: any
      is_user_following?: any
   }
   @observable domainDescriptionAPIStatus!: number
   @observable domainDescriptionAPIError: null
   @observable dashboardService:DashboardService
   @observable domainRequestsList!: DomainRequestList[]
   domainName!: string
   domainId: number
   constructor(dashboardService:DashboardService, domainId: number) {
      this.dashboardService = dashboardService
      this.domainId = domainId
      this.init()
   }

   init() {
      this.domainPostsAPIStatus = API_INITIAL
      this.domainPostsAPIError = null
      this.domainDescriptionAPIStatus = API_INITIAL
      this.domainDescriptionAPIError = null
      this.domainPosts = []
      this.domainDescription = {}
      this.getDomainData()
   }

   @action.bound
   getDomainData() {
      this.getDomainDescription()
      this.getDomainPosts()
   }

   @action.bound
   getDomainDescription() {
      const descriptionPromise = this.dashboardService.domainDescriptionAPI(
         this.domainId
      )
      return bindPromiseWithOnSuccess(descriptionPromise)
         .to(
            this.setDomainDescriptionAPIStatus,
            this.setDomainDescriptionAPIResponse
         )
         .catch(this.setDomainDescriptionAPIError)
   }
   @action.bound
   setDomainDescriptionAPIError(error: any) {
      this.domainDescriptionAPIError = error
   }
   @action.bound
   setDomainDescriptionAPIResponse(response: any) {
      this.domainDescription = response
   }
   @action.bound
   setDomainDescriptionAPIStatus(status: number) {
      this.domainDescriptionAPIStatus = status
   }
   @action.bound
   getDomainPosts() {
      const postsPromise = this.dashboardService.domainPostsAPI(this.domainId)
      return bindPromiseWithOnSuccess(postsPromise)
         .to(this.setDomainPostsAPIStatus, this.setDomainPostsAPIResponse)
         .catch(this.setDomainPostsAPIError)
   }
   @action.bound
   setDomainPostsAPIError(error: any) {
      this.domainPostsAPIError = error
   }
   @action.bound
   setDomainPostsAPIResponse(response: any) {
      this.domainPosts = response.map(
         (post: any) => new PostModel(post, this.dashboardService)
      )
   }
   @action.bound
   setDomainPostsAPIStatus(status: number) {
      this.domainPostsAPIStatus = status
   }

   setDomainRequests = reaction(() => this.domainDescriptionAPIStatus, status => {
      if (status === API_SUCCESS) {
         this.domainRequestsList = this.domainDescription.requests.map(
            (request: { name: string; user_id: number }) => {
               return {
                  username: request.name,
                  userId: request.user_id
               }
            }
         )
      }
   }
   )
   @computed get posts() {
      return this.domainPosts
   }
   @computed get description() {
      const {
         domain_name,
         description,
         domain_experts,
         pending_for_review_count,
         members,
         total_posts_count,
         stars_count,
         total_requests_count,
         requests,
         is_user_following
      } = this.domainDescription

      return {
         domainName: domain_name,
         description,
         domainExperts: domain_experts.map((expert: { profile_pic: any; user_id: any; name: any }) => {
            return {
               profilePic: expert.profile_pic,
               userId: expert.user_id,
               name: expert.name
            }
         }),
         pendingForReview: pending_for_review_count,
         members,
         totalPostsCount: total_posts_count,
         starsCount: stars_count,
         totalRequestsCount: total_requests_count,
         requests,
         isUserFollowing: is_user_following
      }
   }
}

export default DomainModel
