import { observable, action,computed,reaction,autorun} from "mobx";
import { API_INITIAL, API_SUCCESS } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";


import DomainModel from "../models/DomainModel/DomainModel";
import PostModel from "../models/PostModel.js/index.js";

class DashboardStore {
    @observable postsList;
    @observable postsListAPIStatus;
    @observable postListAPIError;
    @observable domainTypes;
    @observable domainsListAPIStatus;
    @observable domainsListAPIError;
    @observable domainModel;
    @observable currentDomainId;
    @observable dashboardService;
    constructor(dashboardService){
        this.dashboardService = dashboardService;
        this.init();
        this.postCreation;
    }

    @action.bound
    init(){
    this.postsListAPIStatus=API_INITIAL;
    this.domainsListAPIStatus=API_INITIAL;
    this.postListAPIError=null;
    this.domainsListAPIError=null;
    this.postsList=[];
    this.domainTypes = {};
    }
    @action.bound
    getDomainTypes(){
        const requestObj={};
      
        const domainServicePromise = this.dashboardService.domainTypesAPI(requestObj);
        return bindPromiseWithOnSuccess(domainServicePromise)
        .to(this.setDomainsListStatus,this.setDomainsListResponse)
        .catch(this.setDomainsListError)
       
    }

    @action.bound
    setDomainsListStatus(status){
        this.domainsListAPIStatus=status;
    }
    
    @action.bound
    setDomainsListResponse(response){
        this.domainTypes= Object.assign({},response);
    }
    @action.bound
    setDomainsListError(error){
       
        this.domainsListAPIError =error;
    }
    @action.bound
    getPosts(){    
        const postServicePromise = this.dashboardService.allDomainsPostsAPI();
        return bindPromiseWithOnSuccess(postServicePromise)
        .to(this.setPostsListStatus,this.setPostsListResponse)
        .catch(this.setPostsListError)    
    }

    @action.bound
    setPostsListStatus(status){
        this.postsListAPIStatus=status;
    }
    
    @action.bound
    setPostsListResponse(response){
        this.postsList=[];
     response.forEach(post=>this.postsList.push(new PostModel(post,this.dashboardService)))
    }

    @action.bound
    setPostsListError(error){
        this.postListAPIError =error;
    }
    @action.bound
    createDomainModelObj(domainId){
        this.domainModel  = new DomainModel(this.dashboardService,domainId);
        this.currentDomainId = domainId;
        console.log(this.currentDomainId,domainId);
    }
    
   @computed get postsListOnscreen(){
       if(this.domainModel.domainPostsAPIStatus===API_SUCCESS){
        this.postsList= this.domainModel.domainPosts;
       }
    }

    setPostAndRequestListsFromDomains = reaction(()=>this.domainModel,(domainModel)=>{
        if(domainModel.domainPostsAPIStatus===API_SUCCESS){
            this.postsList=[];
            this.postsList = this.domainModel.domainPosts;
        }}
    )
    trackingOfPostsLists= autorun(()=>console.log(1111,this.postsList))
    
    @action.bound
    getPostModel(id){
        return this.postsList.find(post =>post.postId===id)
    }
        
    @computed get domainsPosts (){       
      let postsObjList = [];
      this.postsList.forEach(value=>{
          postsObjList.push(value)
      })
      
        return postsObjList;
    }

    @computed get followingDomains(){
        let computedFollowingDomains = this.domainTypes.following_domains;
        if(computedFollowingDomains){
            return   computedFollowingDomains.map(domain=>{
                return{
                    domainName:domain.domain_name,
                    domainId:domain.domain_id
                }
            } );
        }
    }
          
}

export { DashboardStore };