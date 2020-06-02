import { observable,action,computed } from "mobx";
import PostModel from "../PostModel.js/index.js";
import { API_INITIAL } from "@ib/api-constants";

class DomainModel {
    @observable domainPosts;
    @observable postsLoadLimit;
    @observable domainPostsAPIStatus;
    @observable domainPostsAPIError;
    @observable domainDescription;
    @observable domainDescriptionAPIStatus;
    @observable domainDescriptionAPIError;
    dashboardService;
    constructor(dashboardService,domainObj){
        this.dashboardService = dashboardService;
       this.init(domainObj);
    }
   
    init(domainObj){
        const {domain_name,domain_id} = domainObj;
        this.domainName=domain_name;
        this.domainId =domain_id;
        this.postsLoadLimit = 10;
        this.domainPostsAPIStatus=API_INITIAL;
        this.domainPostsAPIError= null;
        this.domainDescriptionAPIStatus=API_INITIAL;
        this.domainDescriptionAPIError= null;
    }
   @action.bound
   getDomainData(){
    this.getDomainDescription();
    this.getDomainPosts();
   }
   
   @action.bound
   getDomainDescription(){
    const descriptionPromise = this.dashboardService.domainDescriptionAPI();
        return bindPromiseWithOnSuccess(descriptionPromise)
        .to(this.setDomainDescriptionAPIStatus,this.setDomainDescriptionAPIResponse)
        .catch(this.setDomainDescriptionAPIError);
   }
   @action.bound
   setDomainDescriptionAPIError(error){
       this.domainDescriptionAPIError = error;
   }
   @action.bound
   setDomainDescriptionAPIResponse(response){
            this.domainDescription=object({}, response);
   }
   @action.bound
   setDomainDescriptionAPIStatus(status){
       this.domainDescriptionAPIStatus = status;
   }
   @action.bound 
   getDomainPosts(){
    const postsPromise = this.dashboardService.domainPostsAPI();
        return bindPromiseWithOnSuccess(postsPromise)
        .to(this.setDomainPostsAPIStatus,this.setDomainPostsAPIResponse)
        .catch(this.setDomainPostsAPIError);
   }
   @action.bound
   setDomainPostsAPIError(error){
       this.domainPostsAPIError = error;
   }
   @action.bound
   setDomainPostsAPIResponse(response){
    response.forEach(post=>this.domainPosts.push(new PostModel(post,this.dashboardService)))
           
   }
   @action.bound
   setDomainPostsAPIStatus(status){
       this.domainPostsAPIStatus = status;
   }










   @action.bound
   setDomainPosts(postsList){
    postsList.forEach(postObj => this.domainPosts.set(postObj.post_id,new PostModel(postObj)));
   }

   onClickLoadMoreProducts(){
       this.postsLoadLimit+=this.postsLoadLimit;
   }
   @computed get posts(){
       
   }
}

export default DomainModel;