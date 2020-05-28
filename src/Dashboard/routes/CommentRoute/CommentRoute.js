import React, { Component } from "react"
import { observer } from "mobx-react";
import { Div } from "./styledComponents";
import { Comments } from "../../../components/common/Comments";


@observer
class CommentRoute extends Component{
render(){
    const {data}=this.props;
    const {} = data
    return(
        <Div>
            <Comments
            imageSrc={}
            authorName = {}
            commentDateAndTime={}
            comment={ }
            answer={ }
            hasReacted={ }
            reactions={ }
            comments={ }/>
        </Div>
    )
}
}

export { CommentRoute }