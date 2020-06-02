import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";

import  Dashboard  from "../../components/Dashboard";

import { DomainDetails } from "../../components/DomainDetails";



@observer
class DomainRoute extends Component{
    
    render()
    {  const {match} = this.props;
        const {params} = match;
        return(
            <>
           <Dashboard TimeLine={DomainDetails} /> 
           </>
        )
    }
}





export default withRouter(DomainRoute);