import React, { Component } from "react"
import { observer } from "mobx-react";
import { Div } from "./styledComponents";
import { Posts } from "../../../components/common/Posts/Posts";


@observer
class PostsRoute extends Component{
render(){
    const {data}=this.props;
    const {} = data
    return(
        <Div>
            <Posts
            imageSrc= { }
            authorName= { }
            postDateAndTime= { }
            DomainName= { }
            postTitle= { }
            tags= { }
            hasReacted= { }
            reactions= { }
            comments= { }/>
        </Div>
    )
}
}

export { PostsRoute }