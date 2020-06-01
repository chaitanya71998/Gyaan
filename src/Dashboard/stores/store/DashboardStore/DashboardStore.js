import { observable, action,computed } from "mobx";
import { API_INITIAL, API_SUCCESS } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import DomainModel from "../../models/DomainModel/DomainModel";
import PostModel from "../../models/PostModel.js/index.js";
import domainType from "../../../fixtures/domainTypes.json";
import postsList from "../../../fixtures/postsList.json";

class DashboardStore {
    
    @observable postsList;
    @observable domainTypes;
    @observable postsListAPIStatus;
    @observable postListAPIError;
    @observable domainsListAPIStatus;
    @observable domainsListAPIError;
    
    constructor(serviceObj){
        this.domainAPIService = serviceObj.domainService
        this.postsAPIService = serviceObj.productService;
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
    //    const postsEndPoint= "domains/v1"
    //     const domainServicePromise = this.domainAPIService.getAPI(postsEndPoint);
    //     return bindPromiseWithOnSuccess(domainServicePromise)
    //     .to(this.setDomainsListStatus,this.setListResponse)
    //     .catch(this.setDomainsListError)
        this.setDomainsListStatus(API_SUCCESS);
        this.setDomainsListResponse(domainType);
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
        // const postsEndPoint= "posts/v1"
        // const postServicePromise = this.postsAPIService.getAPI(postsEndPoint);
        // return bindPromiseWithOnSuccess(postServicePromise)
        // .to(this.setPostsListStatus,this.setPostsListResponse)
        // .catch(this.setPostsListError)

        this.setPostsListStatus(API_SUCCESS);
        this.setPostsListResponse(postsList)
    }

    @action.bound
    setPostsListStatus(status){
        this.postsListAPIStatus=status;
    }
    
    @action.bound
    setPostsListResponse(response){
        
     response.forEach(post=>this.postsList.push(new PostModel(post)))
     
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
        
        let followingDomains = this.domainTypes.following_domains;
        
        return followingDomains;
    }
        
}

export { DashboardStore };