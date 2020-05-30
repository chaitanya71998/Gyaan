import React,{ Component } from "react";
import { Button } from "./styledComponents";

class ButtonElement extends Component{
    render(){
        const {onClick,children} = this.props;
        return(
           <Button onClick={onClick} children={children}/> 
        )
    }
}
export { ButtonElement }