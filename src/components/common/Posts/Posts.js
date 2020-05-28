import React,{ Component } from "react"
import { observer } from "mobx-react";
import { FiHeart } from "react-icons/fi";

import { ImageElement} from "../ImageElement";

import { Div, Header ,Footer,ReactionAndComments } from "./styledComponents";
import { Typo14DarkBlueGreyHKGroteskSemiBold,Typo12BrightBlueRubikRegular, Typo14SteelHKGroteskRegular,Typo24DarkBlueGreyHKGroteskBold } from "../../../style_guide/Typos";
import { Comments } from "../Comments";


@observer
class Posts extends Component{

    tagsToPost=()=>{
    const {tags}  = this.props;
    if(tags.length)
    {
    return(
        <Div className="flex">
        {tags.map(eachTag=>{
            return(
            <Div>
                <ImageElement
                src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/bcbd3c61-3d01-44df-9fa3-24bc8e8872b4.svg"
                alt="tag"/>
                <Typo12BrightBlueRubikRegular>eachTag.tag_name</Typo12BrightBlueRubikRegular>
            </Div>
            )
        })}</Div>)
    }
    return <Div></Div>
}
loadComments=()=>{
    const {comments} = this.props;
    if(comments.length)
    {
    return comments.map(eachComment=><CommentsRoute key={eachComment.comment_id} id={eachComment.comment_id} data={eachComment} />)
    }
    return<b>No Comments</b>
}
render(){
    const {
        imageSrc,
        authorName,
        postDateAndTime,
        DomainName,
        postTitle,
        tags,
        hasReacted,
        reactions,
        comments,
    } = this.props;

    return(
        <Div>
        <Div>
            <Header>
                <Div>
                <ImageElement
                    src={imageSrc}
                    alt={authorName[0]}/>
               <AuthorAndPostTime>
               <Typo14DarkBlueGreyHKGroteskSemiBold>
                    {authorName} .
                </Typo14DarkBlueGreyHKGroteskSemiBold>
                <Typo14SteelHKGroteskRegular>
                    . {postDateAndTime}
                </Typo14SteelHKGroteskRegular>
               </AuthorAndPostTime>
               </Div>
               <Div>
               <Typo14DarkBlueGreyHKGroteskSemiBold>
                   {DomainName}
               </Typo14DarkBlueGreyHKGroteskSemiBold>
               </Div>
            </Header>
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
        </Div>
    )
}
}

export { Posts }