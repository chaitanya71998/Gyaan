import { API_INITIAL, API_SUCCESS } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { action, computed, observable } from 'mobx'
import DomainModel from '../models/DomainModel/DomainModel'
import PostModel from '../models/PostModel.js/index.js'


interface DomainTags {
   tagName: string
   tagId: number
}
export interface DomainTagsFixture {
   tag_name: string
   tag_id: number
}
interface FollowingDomain 
{ 
   domain_name: string;
    domain_id: any
    }

interface PendingForReview{ 
   domain_id: number; 
   domain_name: string; 
   count: number }

interface SuggestedDomains { domain_id: number; domain_name: string; follow_requested: boolean }

class DashboardStore {
   @observable postsList!: PostModel[]
   @observable postsListAPIStatus!: number
   @observable postListAPIError!: string | null
   @observable domainTypes!: { following_domains?: any; pending_for_review?: any; remaining_domains?: any }
   @observable domainsListAPIStatus!: number
   @observable domainsListAPIError: null
   @observable domainModel!: DomainModel | {}
   @observable currentDomainId!: string
   @observable dashboardService: { domainTypesAPI: (arg0: {}) => any; getAllDomainsPostsAPI: () => any; getDomainRelatedTags: (arg0: any) => any }
   @observable domainTagsList!: DomainTags[]
   @observable domainTagsListAPIStatus!: number
   @observable domainTagsListAPIError: null
   constructor(dashboardService: import("../../services/DashboardService/DashboardService.fixture").default | import("../../services/DashboardService/DashboardService.api").default) {
      this.dashboardService = dashboardService
      this.init()
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
      this.domainTagsList =  [];
      this.domainTypes = {}
      this.domainModel = {};
      this.currentDomainId = "";
   }
   @action.bound
   getDomainTypes(): Promise<unknown> {
      const requestObj = {}
      const domainServicePromise = this.dashboardService.domainTypesAPI(
         requestObj
      )
      return bindPromiseWithOnSuccess(domainServicePromise)
         .to(this.setDomainsListStatus, this.setDomainsListResponse)
         .catch(this.setDomainsListError)
   }

   @action.bound
   setDomainsListStatus(status: number) {
      this.domainsListAPIStatus = status
   }

   @action.bound
   setDomainsListResponse(response: any) {
      this.domainTypes = response
   }
   @action.bound
   setDomainsListError(error: any) {
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
   setPostsListStatus(status: number) {
      this.postsListAPIStatus = status;
   }

   @action.bound
   setPostsListResponse(response: any) {
      this.postsList = []
      response.forEach((post: any) =>
         this.postsList.push(new PostModel(post, this.dashboardService))
      )
   }

   @action.bound
   setPostsListError(error: string) {
      this.postListAPIError = error
   }
   @action.bound
   createDomainTags(domainId: number) {
      const createDomainTagsPromise = this.dashboardService.getDomainRelatedTags(domainId)
      return bindPromiseWithOnSuccess(createDomainTagsPromise)
         .to(this.setDomainTagsStatus, this.setDomainTagsResponse)
         .catch(this.setDomainTagsError)
   }

   @action.bound
   setDomainTagsStatus(status: number) {
      this.domainTagsListAPIStatus = status
   }

   @action.bound
   setDomainTagsResponse(response:any) {
      this.domainTagsList = response.map((tag: DomainTagsFixture) => {
         return {
            tagName: tag.tag_name,
            tagId: tag.tag_id
         }
      })
   }
   @action.bound
   setDomainTagsError(error: any) {
      this.domainTagsListAPIError = error
   }
   @action.bound
   clearCurrentDomainId() {
      this.currentDomainId = ''
   }
   @action.bound
   createDomainModelObj(domainId: any) {
      this.domainModel = new DomainModel(this.dashboardService, domainId)
      this.currentDomainId = domainId
   }

   @computed get followingDomains() {
      if (this.domainsListAPIStatus === API_SUCCESS) {
         return this.domainTypes.following_domains.map((domain: FollowingDomain) => ({
               domainName: domain.domain_name,
               domainId: domain.domain_id
            }))
      }
      return []
   }

   @computed get pendingForReview() {
      if (this.domainsListAPIStatus === API_SUCCESS) {
         return this.domainTypes.pending_for_review.map((domain: PendingForReview) => ({
               domainId: domain.domain_id,
               domainName: domain.domain_name,
               pendingCount: domain.count
            }))
      }
      return []
   }

   @computed get suggestedDomains() {
      if (this.domainsListAPIStatus === API_SUCCESS) {
         return this.domainTypes.remaining_domains.map((domain: SuggestedDomains) => ({
            domainId: domain.domain_id,
            domainName: domain.domain_name,
            isRequested: domain.follow_requested
         }))
      }
      return []
   }
}

export { DashboardStore }

