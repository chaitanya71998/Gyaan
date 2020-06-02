import { observable, action,computed } from "mobx";
import { API_INITIAL, API_SUCCESS } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";


import DomainModel from "../models/DomainModel/DomainModel";
import PostModel from "../models/PostModel.js/index.js";

class DashboardStore {
    
    @observable postsList;
    @observable domainTypes;
    @observable postsListAPIStatus;
    @observable postListAPIError;
    @observable domainsListAPIStatus;
    @observable domainsListAPIError;
    @observable dashboardService;

    constructor(dashboardService){
        this.dashboardService = dashboardService;
        this.init();
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
     response.forEach(post=>this.postsList.push(new PostModel(post,this.dashboardService)))
     
    }
    @action.bound
    setPostsListError(error){
        
        this.postListAPIError =error;
    }

    @computed get domainsPosts (){
        
      let postsObjList = [];
      this.postsList.forEach(value=>{
          postsObjList.push(value)
      })
      
        return postsObjList;
    }

    @computed get followingDomains(){
        
        let followingDomains = this.domainTypes.following_domains
        if(followingDomains){
            return   followingDomains.map(domain=>new DomainModel(this.dashboardService,domain) );
        }
    }
    @action.bound
    getDomainModel(id){
        if(this.domainTypes.following_domains){
            return new DomainModel( this.dashboardService, this.domainTypes.following_domains.find(domain=>domain.domain_id===id) )
        }
    }
        
}

export { DashboardStore };