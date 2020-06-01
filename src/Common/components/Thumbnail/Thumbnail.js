import React,{ Component } from "react"

import { LargeThumbnail,MediumThumbnail,SmallThumbnail } from "./styledComponents";

class Thumbnail extends Component{

thumbnailElement=()=>{
    const { thumbnailType } = this.props;
    switch(thumbnailType){
        case("large"):{
            return (<LargeThumbnail/>)
            break;
        }
        case("medium"):{
            return (<MediumThumbnail/>)
            break;
        }
        case("small"):{
            return (<SmallThumbnail/>)
            break;
        }
        default:{
            <></>
        }
    }

}
render(){  
   return (
       <>
       {this.thumbnailElement()}
       </>)
}
}
export { Thumbnail }
