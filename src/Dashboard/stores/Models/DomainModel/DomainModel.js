import { observable,action,computed } from "mobx";
import PostModel from "../PostModel.js/index.js";

class DomainModel {
    @observable domainPosts
    @observable postsLoadLimit
    constructor(obj){
        this.domainName=obj.domain_name;
        this.domain_id = obj.domain_id;
        this.domainPosts =new Map();
        this.postsLoadLimit = 10;
        this.description = obj.domain_description;
    }
    @action.bound
   onClickDomain(){
       this.getDomainData(this.postsLoadLimit);
   }

   @action.bound
   getDomainData(postsLoadLimit){
    /**API call for posts */
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