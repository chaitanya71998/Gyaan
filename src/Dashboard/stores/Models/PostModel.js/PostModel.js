import {action,computed, observable } from "mobx";
import {CommentModel} from "../CommentModel";
import ApprovedCommentModel from "../ApprovedCommentModel";

class PostModel {
    @observable tags
    @observable postData;
    @observable answer;
    @observable comments;
    @observable commentsLimitToShow;
    @observable isUserReacted;
    @observable didPostHasAnswer;
    constructor(obj)
    { 
        this.tags = new Map();
        this.postData = obj;
        this.postId = obj.post_id;
        this.userName = obj.creater.name;
        this.profilePic = obj.creater.profile_pic;
        this.dateAndTime = obj.created_at,
        this.title = obj.title,
        this.content = obj.content,
        this.domainName = obj.domain.domain_name,
        this.domainId  = obj.domain.domain_id,
        this.tags = obj.tags.map(eachTag=>eachTag.tagname)
        this.reactionsCount = obj.reactions_count;
        this.isUserReacted = obj.is_user_reacted;
        this.commentsCount = obj.comment_content;
        this.didPostHasAnswer = obj.answer?true:false;
        
        if(this.didPostHasAnswer){
            this.answer = new ApprovedCommentModel(obj.answer[0]);
            this.postType = "question";
            this.commentsLimitToShow = 1;
        }
        else{
          this.postType="default";
          this.commentsLimitToShow = 2;
        }
      
        this.comments = [];
        this.setComments()
    }
    @action.bound
    setComments(){
        this.postData.comments.map(eachComment=>this.comments.push(new CommentModel(eachComment)))
    }
    @action.bound
    onClickReactionOfPost(){
        this.isUserReacted?this.reactionsCount--:this.reactionsCount++;
        /**API call for reaction update */
    }
    @action.bound
    onCreationOfNewComment(commentTxt){
        /*API call fro updating comments */
        this.getComments();
    }
    @action.bound
    getComments(){
        /*getsComments for particular post and sets comments */
        this.setComments();
    }
    @action.bound
    onClickSeeAllComments(){
      this.commentsLimitToShow = this.comments.size;
    }

}

export default PostModel

