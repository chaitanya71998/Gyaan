import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { API_SUCCESS, API_INITIAL } from '@ib/api-constants'
import { getLoadingStatus } from '@ib/api-utils'

import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'

import Dashboard from '../../components/Dashboard'
import { DomainDetails } from '../../components/DomainDetails'
import { DashboardStore } from "../../stores/DashboardStore"

interface DomainRouteProps extends RouteComponentProps {
match:any
}

interface InjectedProps extends DomainRouteProps {
   dashboardStore: DashboardStore
}

@inject('dashboardStore')
@observer
class DomainRoute extends Component<DomainRouteProps>{
   componentDidMount() {
      const { match } = this.props
      const { params } = match
      const { domainId } = params
      const { createDomainModelObj, getDomainTypes } = this.getDashboardStore();
      createDomainModelObj(domainId)
      getDomainTypes()
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getDashboardStore = () => {
      return this.getInjectedProps().dashboardStore
   }
   render() {
      const { match } = this.props
      const { domainModel } = this.getDashboardStore();
      const { params } = match
      const { domainId } = params

      if (Object.keys(domainModel).length) {
         if (
            getLoadingStatus(
               domainModel.domainDescriptionAPIStatus,
               domainModel.domainPostsAPIStatus
            )
         ) {
            const DomainDetailsWithIdAsParams = () => {
               return <DomainDetails domainModelObj={domainModel} />
            }

            return (
               <>
                  <Dashboard
                     pendingRequests={domainModel.domainRequestsList}
                     TimeLine={DomainDetailsWithIdAsParams}
                  />
               </>
            )
         }
         return <LoadingWrapperWithFailure />
      }
      return <LoadingWrapperWithFailure />
   }
}

export default withRouter(DomainRoute)

