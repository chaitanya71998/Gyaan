import React,{ Component } from "react";
import { observer } from "mobx-react";

import { Menu } from "../Menu"
import { MenuBlock,DashboardBlock, Div } from "./styledComponents";
import { DashboardHeader } from "../DashboardHeader";

@observer
class Dashboard extends Component{

render(){
    const {Timeline}= this.props;
    return(
        <DashboardBlock>
            <MenuBlock>
                <Menu/>
            </MenuBlock>
            <Div>
                <DashboardHeader/>
                <Timeline/>
            </Div>  
        </DashboardBlock>
    )
}
}

export { Dashboard }