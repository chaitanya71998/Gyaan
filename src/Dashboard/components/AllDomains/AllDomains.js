import React,{ Component } from "react"
import { observer } from "mobx-react";
import { observable } from "mobx";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";


@observer
class AllDomains extends Component{
    @observable tooglestatus;
    @observable domainsList;
    constructor(props){
        super(props);
        tooglestatus=false;
        this.domainsList=[];
    }

    displayDomains=()=>{
        const {domainsList} = this.props;
        const limit =3;
        const limiteddomainsList=domainsList.slice(0,limit);
        return limiteddomainsList.map(eachDomain=>{
            return <li>{eachDomain.domain_name}</li>
        })
    }
render(){
    const {togglestatus, onToogle}
    return(
        <div>
            <p onClick={onToogle}>{domainName} <span>{togglestatus?<IoIosArrowDown/>:<IoIosArrowUp/>}</span></p>
            {togglestatus?<></>:this.displayDomains()}
        </div>
    )
}
}

export { AllDomains }