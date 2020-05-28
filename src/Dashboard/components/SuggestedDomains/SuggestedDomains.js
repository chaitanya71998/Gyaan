import React,{ Component } from "react"
import { observer } from "mobx-react";
import { Div } from "./styledComponents";


@observer
class SuggestedDomains extends Component{
render(){
    return(
        <Div>
            <p>SuggestedDomains</p>
        </Div>
    )
}
}

export { SuggestedDomains }