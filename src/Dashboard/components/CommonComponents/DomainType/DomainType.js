import React,{ Component } from "react"
import { observer } from "mobx-react";
import { observable } from "mobx";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

@observer
class DomainType extends Component{
    @observable tooglestatus;
    @observable domainsList;
    @observable limit;
    @observable shouldShowAll
    constructor(props){
        super(props);
        this.shouldShowAll=false;
        this.domainsList=[];
        limit=3;
        
    }

    onClickDomain=(event)=>{
        const {openDomain} = this.props;
        openDomain(event.target.id)
    }

    onClickSeeAll=(event)=>{
        const {domainsList} = this.props;
        this.limit = domainsList.length;
        shouldShowAll = true;
    }
    displayDomains=()=>{
        const {domainsList} = this.props;
        const limitedDomainsList=domainsList.slice(0,limit);
        return( 
            <div>
                {limitedDomainsList.map(eachDomain=>{
                    return <li key={eachDomain.id} id={eachDomain.id} onClick={this.onClickDomain}>{eachDomain.domain_name}</li>
                })}
                {shouldShowAll?<div></div>:<button onClick={this.onClickSeeAll}>see all</button>}
            </div>)
    }
render(){
    const {togglestatus, onToogle}
    return(
        <div>
            <p onClick={onToogle}><DomainTypeButton>{domainName} <span>{togglestatus?<IoIosArrowDown/>:<IoIosArrowUp/>}</span></DomainTypeButton></p>
            {togglestatus?<></>:this.displayDomains()}
        </div>
    )
}
}

export { DomainType }