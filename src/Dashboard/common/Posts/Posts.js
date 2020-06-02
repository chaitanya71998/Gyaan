import React,{ Component } from "react"
import { observer } from "mobx-react";
import { AiOutlineReload } from "react-icons/ai";
import { observable } from "mobx";

import { ImageElement} from "../../../Common/components/ImageElement";
import { Typo12BrightBlueRubikRegular,Typo24DarkBlueGreyHKGroteskBold, Typo12DarkBlueGreyHKGrosteskSemiBold } from "../../../Common/style_guide/Typos";

import strings from "../../i18n/strings.json";
import { CommentRoute } from "../../routes/CommentRoute";


import { PostHeader } from "../PostHeader";
import { EnterComment } from "../EnterComment";

import { Div, SeeAllComments, PostTitle,PostDetails,PostComments,Tags, Footer} from "./styledComponents";
import { ReactionsAndComments } from "../ReactionsAndComments";

const { seeAllComments,noComments, seeLessComments } = strings;
const reloadIconSize = 12;

@observer
class Posts extends Component{
    @observable isToShowAllComments;
    constructor(props){
        super(props);
        this.isToShowAllComments = false
    }

    onClickShowAllComments=(event)=>{
        this.isToShowAllComments= !this.isToShowAllComments;
    }

    tagsToPost=()=>{
    const {tags}  = this.props;
    if(tags.length)
    {
        return(
        <Div>
        {tags.map(tag=>{
            return(
            <Tags key={tag}>
                <ImageElement
                src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/bcbd3c61-3d01-44df-9fa3-24bc8e8872b4.svg"
                alt="tag"/>
                <Typo12BrightBlueRubikRegular>{tag}</Typo12BrightBlueRubikRegular>
            </Tags>
            )
        })}</Div>)
    }
    return <Div></Div>
}
    displayComments=()=>{
        const { comments } = this.props;
       if(comments.length>0) return(
            <PostComments>
                {this.displayAnswer()}
                {this.loadCommentsList()}
                <SeeAllComments onClick={this.onClickShowAllComments}><Typo12DarkBlueGreyHKGrosteskSemiBold>{this.isToShowAllComments?seeLessComments:seeAllComments}</Typo12DarkBlueGreyHKGrosteskSemiBold><AiOutlineReload size={reloadIconSize}/></SeeAllComments>
            </PostComments>
        )
          return(
            <>
                <Typo12DarkBlueGreyHKGrosteskSemiBold children={noComments}/>
            </>)
    }
    displayAnswer=()=>{
        const {
            didPostHasAnswer,
            answer,
        }=this.props;
        if(didPostHasAnswer){
        return <CommentRoute
            key={answer.id} isAnswerToPost={didPostHasAnswer} commentData={answer} id={answer.id}
            />
        }
        else{
            return <></>
        } 
    }

    loadCommentsList=()=>{
        const {
            commentsLimitToShow,
            comments
        }=this.props;
       
        const numberLimit = this.isToShowAllComments?comments.length:commentsLimitToShow;
        const commentsList=comments.map(comment=>{
            return <CommentRoute key={comment.id} isAnswerToPost={false} id={comment.id} commentData={comment}/>
        })
        return commentsList.slice(0,numberLimit);
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
                       <ReactionsAndComments
                         isUserReacted={isUserReacted}
                          reactionsCount={reactionsCount} 
                          comments={comments}
                       />
                        </Footer>
                    </PostDetails>
                    {this.displayComments()}
                    <EnterComment/>
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