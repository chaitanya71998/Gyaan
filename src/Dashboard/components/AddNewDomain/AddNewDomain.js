import React,{ Component } from "react"
import { observer } from "mobx-react";
import { Div } from "./styledComponents";


@observer
class AddNewDomain extends Component{
render(){
    return(
        <Div>
            <p>AddNewDomain</p>
        </Div>
    )
}
}

export { AddNewDomain }