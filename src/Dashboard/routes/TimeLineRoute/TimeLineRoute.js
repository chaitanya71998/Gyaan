import React, { Component } from "react"
import { observer, inject } from "mobx-react";
import { Div } from "./styledComponents";
import { dashboardStore } from "../../stores";
import { observable } from "mobx";
import { PostsRoute } from "../PostsRoute";


@inject("dashboardStore")
@observer
class TimeLineRoute extends Component{

displayPosts=()=>{
    const {dashboardStore} = this.props;
    const {postsList} = dashboardStore;
    const PO = postsList.map(post=>post);
    
    return postsList.map(post=>{
        return<PostsRoute key= {post.postId} postData = {post}/>
    })
}

render(){
   
    const {dashboardStore} = this.props;
    const {postsList} = dashboardStore;
    return(
        <Div>
            <p>timeLine</p>
            {this.displayPosts()}
        </Div>
    )
}
}

export { TimeLineRoute }