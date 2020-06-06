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
   @observable domainTagsList;
   @observable domainTagsListAPIStatus;
   @observable domainTagsListAPIError;
   constructor(dashboardService) {
      this.dashboardService = dashboardService
      this.init()
      this.postCreation
   }

   @action.bound
   init() {
      this.postsListAPIStatus = API_INITIAL
      this.domainsListAPIStatus = API_INITIAL
      this.postListAPIError = null
      this.domainsListAPIError = null
      this.postsList = [];
      this.domainTagsList=[];
      this.domainTypes = {}
   }
   @action.bound
   getDomainTypes() {
      const requestObj = {}
      const domainServicePromise = this.dashboardService.domainTypesAPI(requestObj)
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
      console.log("DomainTypes",response)
      this.domainTypes= response;
   }
   @action.bound
   setDomainsListError(error) {
      this.domainsListAPIError = error
   }
   @action.bound
   getPosts() {
      const postServicePromise = this.dashboardService.allDomainsPostsAPI()
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
      this.postsList=[];
      response.forEach(post =>
         this.postsList.push(new PostModel(post, this.dashboardService))
      )
   }

   @action.bound
   setPostsListError(error) {
      this.postListAPIError = error;
   }
   @action.bound
   createDomainModelObj(domainId) {
      this.domainModel = new DomainModel(this.dashboardService, domainId)
      this.currentDomainId = domainId;
   }
   @action.bound
   createDomainTags(domainId){
      const createDomainTagsPromise = this.dashboardService.getDomainRelatedTags(domainId)
      return bindPromiseWithOnSuccess(createDomainTagsPromise)
         .to(this.setDomainTagsStatus, this.setDomainTagsResponse)
         .catch(this.setDomainTagsError)
   }
   setDomainTagsStatus(status) {
      this.domainTagsListAPIStatus = status
   }

   @action.bound
   setDomainTagsResponse(response) {
      this.domainTagsList= response.map(tag=>{
         return {
            tagName:tag_name,
            tagId:tag_id
         }
      });
   }
   @action.bound
   setDomainTagsError(error) {
     
      this.domainTagsListAPIError = error
   }
   @computed get postsListOnscreen() {
      if (this.domainModel.domainPostsAPIStatus === API_SUCCESS) {
         this.postsList = this.domainModel.domainPosts
      }
   }

   setPostAndRequestListsFromDomains = reaction(
      () => this.domainModel,
      domainModel => {
         if (domainModel.domainPostsAPIStatus === API_SUCCESS) {
            this.postsList = []
            this.postsList = this.domainModel.domainPosts
         }
      }
   )

   @action.bound
   getPostModel(id) {
      return this.postsList.find(post => post.postId === id)
   }
   @action.bound
   clearCurrentDominId(){
      this.currentDomainId="";
   }

   @computed get domainsPosts() {
      let postsObjList = []
      this.postsList.forEach(value => {
         postsObjList.push(value)
      })
      return postsObjList
   }

   @computed get followingDomains() {
      if (this.domainsListAPIStatus===API_SUCCESS) {
         return this.domainTypes.following_domains.map(domain => {
            return {
               domainName: domain.domain_name,
               domainId: domain.domain_id
            }
         })
      }
      return [];
   }
   @computed get pendingForReview(){
      if(this.domainsListAPIStatus===API_SUCCESS){
        return  this.domainTypes.pending_for_review.map(domain=>{
            return {
            domainId:domain.domain_id,
            domainName:domain.domain_name,
            pendingCount:domain.count
            }
         })
      }
      return [];
    
   }

   @computed get suggestedDomains(){
      if(this.domainsListAPIStatus===API_SUCCESS){
        return this.domainTypes.remaining_domains.map(domain=>{
           return {
              domainId:domain.domain_id,
              domainName:domain.domain_name,
              isRequested:domain.follow_requested
           }
        });
      }
      return[];
   }
}

export { DashboardStore }
