import {action,computed, observable } from "mobx";

class ApprovedCommentModel {
    @observable replies;
    @observable repliesCount;
    @observable isUserReacted;
    @observable showAllReplies;

    constructor(obj){
        this.commentData = obj;
        this.id = obj.comment_id;
        this.user = obj.commented_by;
        this.userId = obj.commented_by.user_id;
        this.userName =obj.commented_by.name;
        this.userProfilePic = obj.commented_by.profile_pic;
        this.commentedAt = obj.commented_at;
        this.commentedContent = obj.comment_content ;
        this.isUserReacted=obj.is_user_reacted;
        this.repliesCount = obj.replies_count;
        this.reactionsCount = obj.reactions_count;
        this.replies = new Map();
        this.setReplies();
        this.showAllReplies=false;
        this.approvedUser= obj.approved_by.name;
        this.approvedUserId = obj.approved_by.user_id;
        this.approvedUserDomain = obj.approved_by.domain_name;
        this.approvedUserDomainID = obj.approved_by.domain_id;
    }
    
    @action.bound
    setReplies(){
        this.commentData.replies.forEach(reply=>{
            this.replies.set(reply.reply_id,reply)
        })
    }
    
    @action.bound
    onClickReaction(){
        this.isUserReacted=!this.isUserReacted;
        /**API call for reaction set */
    }

    @action.bound
    onClickApprovedUser(){
        /**API call for that userAnd redirect that user page */
    }

    @action.bound
    onClickShowAll(){
        this.showAllReplies=!this.showAllReplies;
    }
    @computed get repliesForComments(){
        if(this.showAllReplies){
            return [...this.replies];
        }
        return [...this.replies][0];
    }
    
} 

export default ApprovedCommentModel;