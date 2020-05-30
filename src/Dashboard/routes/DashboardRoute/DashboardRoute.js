import React, { Component } from "react"
import { observer, inject, Provider } from "mobx-react";

import { Dashboard } from "../../components/Dashboard";

import { Div } from "./styledComponents";
import { dashboardStore } from "../../stores";

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
            <Dashboard/>
        </Div>
    )
}
}

export { DashboardRoute }