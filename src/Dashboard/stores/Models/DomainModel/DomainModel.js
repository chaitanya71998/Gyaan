import { observable, action, computed, reaction } from 'mobx'
import PostModel from '../PostModel.js/index.js'
import { API_INITIAL, API_SUCCESS } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class DomainModel {
   @observable domainPosts
   @observable postsLoadLimit
   @observable domainPostsAPIStatus
   @observable domainPostsAPIError
   @observable domainDescription
   @observable domainDescriptionAPIStatus
   @observable domainDescriptionAPIError
   @observable dashboardService
   @observable domainRequestsList
   domainName
   domainId
   constructor(dashboardService, domainId) {
      this.dashboardService = dashboardService
      this.domainId = domainId
      this.init()
   }

   init() {
      this.postsLoadLimit = 10
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
   setDomainDescriptionAPIError(error) {
      this.domainDescriptionAPIError = error
   }
   @action.bound
   setDomainDescriptionAPIResponse(response) {
      this.domainDescription = response
   }
   @action.bound
   setDomainDescriptionAPIStatus(status) {
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
   setDomainPostsAPIError(error) {
      this.domainPostsAPIError = error
   }
   @action.bound
   setDomainPostsAPIResponse(response) {
      this.domainPosts = response.map(
         post => new PostModel(post, this.dashboardService)
      )
   }
   @action.bound
   setDomainPostsAPIStatus(status) {
      this.domainPostsAPIStatus = status
   }
   setDomainRequests = reaction(
      () => this.domainDescriptionAPIStatus,
      status => {
         if (status === API_SUCCESS) {
            this.domainRequestsList = this.domainDescription.requests.map(
               request => {
                  return {
                     username: request.name,
                     userId: request.user_id
                  }
               }
            )
         }
      }
   )

   //    @action.bound
   //    setDomainPosts(postsList){
   //     postsList.forEach(postObj => this.domainPosts.set(postObj.post_id,new PostModel(postObj)));
   //    }

   onClickLoadMorePosts() {
      this.postsLoadLimit += this.postsLoadLimit
   }
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
         domainExperts: domain_experts.map(expert => {
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
