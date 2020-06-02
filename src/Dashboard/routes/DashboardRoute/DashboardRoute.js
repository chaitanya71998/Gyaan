import React, { Component } from "react"
import { observer, inject, Provider } from "mobx-react";

import { Dashboard } from "../../components/Dashboard";
import { TimeLine } from "../../components/TimeLine";

import { Div } from "./styledComponents";

@inject("dashboardStore")
@observer
class DashboardRoute extends Component{
    componentDidMount(){
        const {dashboardStore} = this.props;
        dashboardStore.getDomainTypes();
        dashboardStore.getPosts();
    }
render(){
    return(  
        <Div>
            <Dashboard Timeline={TimeLine}/>
        </Div>
    )
}
}

export { DashboardRoute }