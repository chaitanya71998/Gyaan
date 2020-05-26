import React,{ Component } from "./node_modules/react";
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