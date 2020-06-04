import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";

import  Dashboard  from "../../components/Dashboard";

import { DomainDetails } from "../../components/DomainDetails";
import { API_SUCCESS } from "@ib/api-constants";
import LoadingWrapperWithFailure from "../../../Common/components/LoadingWrapperWithFailure";

@inject("dashboardStore")
@observer
class DomainRoute extends Component{
  componentDidMount(){
      
      const { dashboardStore ,match} = this.props;
      const {params} = match;
      const { domainId } = params;
    dashboardStore.createDomainModelObj(domainId);
  }

    render()
        {  const { dashboardStore } = this.props;
            const { domainModel } = dashboardStore;
            if(domainModel){
                
                if(domainModel.domainPostsAPIStatus===API_SUCCESS && domainModel.domainDescriptionAPIStatus===API_SUCCESS )
               {  
                   const DomainDetailsWithIdAsParams = ()=>{
                    return <DomainDetails domainModelObj={domainModel}/>
                    }
                    
                    return(
                        <>
                            <Dashboard pendingRequests={domainModel.domainRequestsList} TimeLine={DomainDetailsWithIdAsParams} /> 
                        </>
                    )
                }
                return <LoadingWrapperWithFailure/>
            }
            return <LoadingWrapperWithFailure/>
        }
}




export default withRouter(DomainRoute);