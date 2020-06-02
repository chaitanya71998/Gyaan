import React,{ Component } from "react"
import { observer } from "mobx-react";
import { AiOutlineHeart } from "react-icons/ai";

import { ImageElement} from "../../../Common/components/ImageElement";
import { Typo12DarkBlueGreyHKGroteskRegular, Typo16BrightBlueHKGroteskBold ,Typo14DarkBlueGreyHKGroteskSemiBold, Typo18DarkBlueGreyHKGroteskMedium} from "../../../Common/style_guide/Typos";

import { Div,CommentBlock, AnswerTypeComment, CommentHeader,DateAndTime ,Footer,Numbers,CommentReactions, CommentData, CommenterDetails } from "./styledComponents";
import { Thumbnail } from "../../../Common/components/Thumbnail"
import { SmallThumbnail } from "../../../Common/components/Thumbnail/styledComponents";


@observer
class Comment extends Component{

answerToPost=()=>{
    const {isAnswerToPost,approvedUser,postDomain}  = this.props;
    if(isAnswerToPost)
    {
    return( 
        <AnswerTypeComment>
            <ImageElement
            src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/aaee9464-2926-4c59-9a80-223974c0b6c7.svg"
            alt="tick"/>
            <Typo12DarkBlueGreyHKGroteskRegular>Approved by <Typo16BrightBlueHKGroteskBold>{`${approvedUser}(${postDomain})`}</Typo16BrightBlueHKGroteskBold> </Typo12DarkBlueGreyHKGroteskRegular>
            </AnswerTypeComment>)
    }
    return <Div></Div>
}
loadOtherComments=()=>{
    {comments}
}
render(){
    const {
        profilePic,
        authorName,
        commentDateAndTime,
        comment,
        isAnswerToPost,
        hasReacted,
        reactionsCount,
        repliesCount,
        replies,

    } = this.props;
    return(
        <CommentBlock>
            <CommentHeader>
                <SmallThumbnail 
                    src={profilePic}
                    alt={authorName[0]}/>
                <CommenterDetails>
                    <Typo14DarkBlueGreyHKGroteskSemiBold>
                        {authorName} . <DateAndTime>. {commentDateAndTime}</DateAndTime>
                    </Typo14DarkBlueGreyHKGroteskSemiBold>
                </CommenterDetails>    
            </CommentHeader>
            <CommentData>
                <Typo18DarkBlueGreyHKGroteskMedium>{comment} </Typo18DarkBlueGreyHKGroteskMedium>
            </CommentData>
            <Footer isAnswerToPost={isAnswerToPost?true:false}>
                {this.answerToPost()}
                <CommentReactions>        
                        <AiOutlineHeart color={hasReacted?"red":""}/>
                        <Numbers>{reactionsCount} </Numbers>
                         <ImageElement src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/e185f501-5dde-45ad-9f10-0cbeea737ee4.svg"/>
                         <Numbers> {repliesCount} {repliesCount>1?"comments":"comment"}</Numbers>
                </CommentReactions>
            </Footer>
        </CommentBlock>
        
    )
}
}

export { Comment }