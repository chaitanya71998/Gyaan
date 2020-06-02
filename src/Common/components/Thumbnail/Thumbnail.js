import React,{ Component } from "react"

import {Img, LargeThumbnail,MediumThumbnail,SmallThumbnail } from "./styledComponents";

class Thumbnail extends Component{

thumbnailElement=()=>{
    const { thumbnailType } = this.props;
    switch(thumbnailType){
        case("large"):{
            return (<LargeThumbnail />)
            break;
        }
        case("medium"):{
            return (<MediumThumbnail />)
            break;
        }
        case("small"):{
            return (<SmallThumbnail />)
            break;
        }
        default:{
            return(<Img/> )
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
