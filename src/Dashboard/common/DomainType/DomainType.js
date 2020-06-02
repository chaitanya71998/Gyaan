import React,{ Component } from "react"
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { observable } from "mobx";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

import  FollowingDomainsTypeList  from "../FollowingDomainsTypeList";

import { Button,Div } from "./styledComponents";

@observer
class DomainType extends Component{
    @observable domainsList;
    @observable limit;
    @observable shouldShowAll;
    constructor(props){
        super(props);
        this.shouldShowAll=false;

        this.domainsList=[];
        this.limit=3;
        
    }
  

    onClickSeeAll=(event)=>{
        const {domainsList} = this.props;  
        this.shouldShowAll = !this.shouldShowAll;
        const defaultLimit = 3;
        this.limit = this.shouldShowAll?domainsList.length:defaultLimit;
    }
    displayDomains=()=>{
        const {domainsList} = this.props;
       return <FollowingDomainsTypeList  onClickSeeAll={this.onClickSeeAll}limit={this.limit} shouldShowAll={this.shouldShowAll} domainsList={domainsList}/>
    }
render(){
    const {toggleStatus, onToggle,domainName} =this.props;
    return(
        <Div>
            <Button onClick={onToggle}>{domainName} <span>{toggleStatus?<IoIosArrowDown onClick={onToggle}/>:<IoIosArrowUp onClick={onToggle}/>}</span></Button>
            {toggleStatus?<></>:this.displayDomains()}
        </Div>
    )
}
}

export   default withRouter(DomainType )