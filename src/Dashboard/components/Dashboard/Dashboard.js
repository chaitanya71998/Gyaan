import React,{ Component } from "react";
import { observer } from "mobx-react";
import { TimeLineRoute } from "../../routes/TimeLineRoute";
import { Menu } from "../Menu"
import { MenuBlock,DashboardBlock, Div } from "./styledComponents";
import { DashboardHeader } from "../DashboardHeader";

@observer
class Dashboard extends Component{
render(){
    return(
        <DashboardBlock>
            <MenuBlock>
                <Menu/>
            </MenuBlock>
            <Div>
                <DashboardHeader/>
                <TimeLineRoute/>
            </Div>  
        </DashboardBlock>
    )
}
}

export { Dashboard }