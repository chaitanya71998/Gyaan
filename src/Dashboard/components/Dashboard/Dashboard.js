import React,{ Component } from "react";
import { observer } from "mobx-react";

@observer
class Dashboard extends Component{
render(){
    return(
        <DashboardBlock>
            <SideBar/>
            <>
                <Header/>
                <Content/>
            </>
        </DashboardBlock>
    )
}
}

export { AppHomeScreen }