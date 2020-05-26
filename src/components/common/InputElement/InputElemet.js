import React,{ Component } from "./node_modules/react";
import { Input } from "./styledComponents";

class InputElement extends Component{
    render(){
        const {value,type,onChange,isCorrect} = this.props;
        return(
           <Input value={value} type={type} onChange={onChange} error={isCorrect}/> 
        )
    }
}
export { InputElement }