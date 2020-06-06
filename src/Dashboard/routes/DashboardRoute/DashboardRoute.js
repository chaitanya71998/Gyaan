import React, { Component } from 'react'
import { observer, inject, Provider } from 'mobx-react'

import Dashboard from '../../components/Dashboard'
import { TimeLine } from '../../components/TimeLine'

import { Div } from './styledComponents'
import { API_SUCCESS, API_FAILED } from "@ib/api-constants"
import LoadingWrapperWithFailure from "../../../Common/components/LoadingWrapperWithFailure"
import { getUserDisplayableErrorMessage } from "../../../Common/utils/APIUtils"
import { getAccessToken } from "../../../Common/utils/StorageUtils"
import { Redirect } from "react-router-dom"
import { paths } from "../../../Common/constants/NavigationConstants"


const {signInForm} = paths;

@inject('dashboardStore')
@observer
class DashboardRoute extends Component {
   componentDidMount() {
      this.setDashboardData();
   }
   setDashboardData() {
      const { dashboardStore } = this.props
     dashboardStore.getDomainTypes()
     dashboardStore.getPosts()

   }
   render() {
      const { dashboardStore} = this.props;
      const { postsListAPIStatus,domainsListAPIStatus } = dashboardStore;
     
     if(postsListAPIStatus===API_SUCCESS && domainsListAPIStatus===API_SUCCESS){
      if(getAccessToken()) {
         return(
            <Div>
               <Dashboard TimeLine={TimeLine} />
            </Div>) 
      }  
      else{
         return <Redirect to ={signInForm}/>
      }
     }
      return <LoadingWrapperWithFailure/>
   }
}

export { DashboardRoute }
