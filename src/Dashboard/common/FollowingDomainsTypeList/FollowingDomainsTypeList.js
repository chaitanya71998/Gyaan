import React,{Component} from "react";

import { DomainTypeButton } from "../styledComponents";

import { Button,Div } from "./styledComponents";
import { withRouter } from "react-router-dom";

class FollowingDomainsTypeList extends Component{
    
    onClickDomain=(event)=>{
        this.props.history.push(`/Domain/${event.target.id}`);
    }

    render(){
        const {domainsList,onClickSeeAll,limit,shouldShowAll} = this.props;
        
        return( 
            <>
            
                {domainsList.slice(0,limit).map(domain=>{
                   const {domainId, domainName} = domain;
                    return <DomainTypeButton key={domainId} id={domainId} onClick={this.onClickDomain}>{domainName}</DomainTypeButton>
                })}
                {shouldShowAll?<Button  onClick={onClickSeeAll}>see less</Button>:<Button onClick={onClickSeeAll}>see all</Button>}
            </>)
    }

}

export default withRouter(FollowingDomainsTypeList);