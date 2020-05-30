import React,{ Component } from "react"
import { observer } from "mobx-react";
import { dashboardStore } from "../../stores";
import { Div } from "./styledComponents";
import { DomainType } from "../../common/DomainType";
import strings  from "../../i18n/strings.json";


@observer
class FollowingDomains extends Component{
render(){
    
    const { followingDomainsString } = strings;
    const {followingDomains}=dashboardStore;
    const {onToggle,toggleStatus}=this.props;
    
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