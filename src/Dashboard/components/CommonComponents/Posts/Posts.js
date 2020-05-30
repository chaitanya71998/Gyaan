import React,{ Component } from "react"
import { observer } from "mobx-react";
import { FiHeart } from "react-icons/fi";

import { ImageElement} from "../../../../components/common/ImageElement";

import { Div,PostTitle,PostDetails,PostComments,Tags,PostReactions,PostProfileThumbnail,Footer,ReactionAndComments, Numbers } from "./styledComponents";
import { Typo14DarkBlueGreyHKGroteskSemiBold,Typo12BrightBlueRubikRegular, Typo14SteelHKGroteskRegular,Typo24DarkBlueGreyHKGroteskBold } from "../../../../style_guide/Typos";

import { PostHeader } from "../PostHeader";
import { CommentRoute } from "../../../routes/CommentRoute";



@observer
class Posts extends Component{

    tagsToPost=()=>{
    const {tags}  = this.props;
    if(tags.length)
    {
        return(
        <Div>
        {tags.map(eachTag=>{
            return(
            <Tags>
                <ImageElement
                src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/bcbd3c61-3d01-44df-9fa3-24bc8e8872b4.svg"
                alt="tag"/>
                <Typo12BrightBlueRubikRegular>{eachTag}</Typo12BrightBlueRubikRegular>
            </Tags>
            )
        })}</Div>)
    }
    return <Div></Div>
}
displayComments=()=>{
    return(
        <PostComments>
            {this.displayAnswer()}
            {this.loadCommentsList()}
        </PostComments>
    )
   // <b>No Comments</b>
}
displayAnswer=()=>{
    const {
        didPostHasAnswer,
        answer,
    }=this.props;
    console.log(answer,didPostHasAnswer)
    if(didPostHasAnswer){
       return <CommentRoute
        key={answer.id} isAnswerToPost={didPostHasAnswer} commentData={answer} id={answer.id}
        />
    }
    else{
        return <div></div>
    } 
}

loadCommentsList=()=>{
    const {
        commentsLimitToShow,
        comments
    }=this.props;
    return (
        comments.map(eachComment=>{
            return <CommentRoute key={eachComment.id} isAnswerToPost={false} id={eachComment.id} commentData={eachComment}/>
        })
    )
}
render(){
    const {
        postId,
        profilePic,
        userName,
        dateAndTime,
        domainName,
        title,
        tags,
        reactionsCount,
        isUserReacted,
        comments
    } = this.props;
    return(
        <Div>
            <PostDetails>
                    <PostHeader 
                        profilePic={profilePic}
                        userName={userName}
                        dateAndTime={dateAndTime}
                        domainName={domainName}
                        />
                    <PostTitle>
                        <Typo24DarkBlueGreyHKGroteskBold>{title} </Typo24DarkBlueGreyHKGroteskBold>
                    </PostTitle>
                    <Footer hasTags={tags.length>0?true:false}>
                    {this.tagsToPost()}
                    <PostReactions>
                        <FiHeart color={isUserReacted?"red":""}/>
                        <Numbers>{reactionsCount}</Numbers>
                        <ImageElement src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/e185f501-5dde-45ad-9f10-0cbeea737ee4.svg"/>
                        <Numbers>{comments.length} {comments.length>1?"comments":"comments"}</Numbers>
                        
                    </PostReactions>
                    </Footer>
                </PostDetails>
                {this.displayComments()}
        </Div>

    )
}
}

/*
<Typo24DarkBlueGreyHKGroteskBold>{postTitle} </Typo24DarkBlueGreyHKGroteskBold>
            <Footer hasTags={tags.length?true:false}>
                {this.tagsToPost()}
                <Div>
                    <ReactionAndComments>
                        <FiHeart color={hasReacted?"red":""}/>{reactions}  <ImageElement src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/e185f501-5dde-45ad-9f10-0cbeea737ee4.svg"/>{comments}
                    </ReactionAndComments>
                </Div>
            </Footer>
        </Div>
        {this.loadComments()}
*/

export { Posts }