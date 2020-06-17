import { observable, action, computed, reaction, autorun } from 'mobx'
import { API_INITIAL, API_SUCCESS } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

import DomainModel from '../models/DomainModel/DomainModel'
import PostModel from '../models/PostModel.js/index.js'

class DashboardStore {
   @observable postsList
   @observable postsListAPIStatus
   @observable postListAPIError
   @observable domainTypes
   @observable domainsListAPIStatus
   @observable domainsListAPIError
   @observable domainModel
   @observable currentDomainId
   @observable dashboardService
   @observable domainTagsList
   @observable domainTagsListAPIStatus
   @observable domainTagsListAPIError
   constructor(dashboardService) {
      this.dashboardService = dashboardService
      this.init()
      this.postCreation
   }

   @action.bound
   init() {
      this.postsListAPIStatus = API_INITIAL
      this.domainsListAPIStatus = API_INITIAL
      this.domainTagsListAPIStatus = API_INITIAL
      this.domainTagsListAPIError = null;
      this.postListAPIError = null;
      this.domainsListAPIError = null;
      this.postsList = [];
      this.domainTagsList = [];
      this.domainTypes = {};
      this.domainModel={};
      this.currentDomainId = "";
   }
   @action.bound
   getDomainTypes() {
      const requestObj = {}
      const domainServicePromise = this.dashboardService.domainTypesAPI(
         requestObj
      )
      return bindPromiseWithOnSuccess(domainServicePromise)
         .to(this.setDomainsListStatus, this.setDomainsListResponse)
         .catch(this.setDomainsListError)
   }

   @action.bound
   setDomainsListStatus(status) {
      this.domainsListAPIStatus = status
   }

   @action.bound
   setDomainsListResponse(response) {
      this.domainTypes = response
   }
   @action.bound
   setDomainsListError(error) {
      this.domainsListAPIError = error
   }
   @action.bound
   getAllDomainsPosts() {
      const postServicePromise = this.dashboardService.getAllDomainsPostsAPI()
      return bindPromiseWithOnSuccess(postServicePromise)
         .to(this.setPostsListStatus, this.setPostsListResponse)
         .catch(this.setPostsListError)
   }

   @action.bound
   setPostsListStatus(status) {
    this.postsListAPIStatus = status;      
   }

   @action.bound
   setPostsListResponse(response) {
      this.postsList = []
      response.forEach(post =>
         this.postsList.push(new PostModel(post, this.dashboardService))
      )
   }

   @action.bound
   setPostsListError(error) {
      this.postListAPIError = error
   }
   @action.bound
   createDomainTags(domainId) {
      const createDomainTagsPromise = this.dashboardService.getDomainRelatedTags(domainId)
      return bindPromiseWithOnSuccess(createDomainTagsPromise)
         .to(this.setDomainTagsStatus, this.setDomainTagsResponse)
         .catch(this.setDomainTagsError)
   }

   @action.bound
   setDomainTagsStatus(status) {
      this.domainTagsListAPIStatus = status
   }

   @action.bound
   setDomainTagsResponse(response) {
      this.domainTagsList = response.map(tag => {
         return {
            tagName: tag.tag_name,
            tagId: tag.tag_id
         }
      })
   }
   @action.bound
   setDomainTagsError(error) {
      this.domainTagsListAPIError = error
   }
   @action.bound
   createDomainModelObj(domainId) {
      this.domainModel = new DomainModel(this.dashboardService, domainId)
      this.currentDomainId = domainId
   }
   
   
   @action.bound
   clearCurrentDomainId() {
      this.currentDomainId = ''
   }


   @computed get followingDomains() {
      if (this.domainsListAPIStatus === API_SUCCESS) {
         return this.domainTypes.following_domains.map(domain => {
            return {
               domainName: domain.domain_name,
               domainId: domain.domain_id
            }
         })
      }
      return []
   }

   @computed get pendingForReview() {
      if (this.domainsListAPIStatus === API_SUCCESS) {
         return this.domainTypes.pending_for_review.map(domain => {
            return {
               domainId: domain.domain_id,
               domainName: domain.domain_name,
               pendingCount: domain.count
            }
         })
      }
      return []
   }

   @computed get suggestedDomains() {
      if (this.domainsListAPIStatus === API_SUCCESS) {
         return this.domainTypes.remaining_domains.map(domain => {
            return {
               domainId: domain.domain_id,
               domainName: domain.domain_name,
               isRequested: domain.follow_requested
            }
         })
      }
      return []
   }
}

export { DashboardStore }
