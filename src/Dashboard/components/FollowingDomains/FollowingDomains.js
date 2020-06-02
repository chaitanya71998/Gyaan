import React,{ Component } from "react"
import { observer,inject } from "mobx-react";
import { Div } from "./styledComponents";
import  DomainType  from "../../common/DomainType";
import strings  from "../../i18n/strings.json";

@inject("dashboardStore")
@observer
class FollowingDomains extends Component{
render(){
    
    const { followingDomainsString } = strings;
    const { dashboardStore } = this.props;
    const { followingDomains }=dashboardStore;
    const { onToggle,toggleStatus }=this.props;
    
    if(followingDomains){
        return(

            <Div>
                <DomainType toggleStatus={toggleStatus} domainName={followingDomainsString} onToggle={onToggle} domainsList={followingDomains}/>
            </Div>
        )
    }
    return <></>
    
}
}

export { FollowingDomains }