import React,{ Component } from "react"
import { observer } from "mobx-react";
import { observable } from "mobx";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { DomainTypeButton } from "../styledComponents";
import { Button,Div } from "./styledComponents"
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

    onClickDomain=(event)=>{
        const {openDomain} = this.props;
        openDomain(event.target.id)
    }

    onClickSeeAll=(event)=>{
        const {domainsList} = this.props;  
        this.shouldShowAll = !this.shouldShowAll;
        const defaultLimit = 3;
        this.limit = this.shouldShowAll?domainsList.length:defaultLimit;
    }
    displayDomains=()=>{
        const {domainsList} = this.props;
        const limitedDomainsList=domainsList.slice(0,this.limit);
        return( 
            <Div>
                {limitedDomainsList.map(domain=>{
                    return <DomainTypeButton key={domain.domain_id} id={domain.id} onClick={this.onClickDomain}>{domain.domain_name}</DomainTypeButton>
                })}
                {this.shouldShowAll?<Button onClick={this.onClickSeeAll}>see less</Button>:<Button onClick={this.onClickSeeAll}>see all</Button>}
            </Div>)
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

export { DomainType }