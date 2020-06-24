import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { API_SUCCESS, API_INITIAL } from '@ib/api-constants'
import { getLoadingStatus } from '@ib/api-utils'

import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'

import Dashboard from '../../components/Dashboard'
import { DomainDetails } from '../../components/DomainDetails'

@inject('dashboardStore')
@observer
class DomainRoute extends Component {
   componentDidMount() {
      const { dashboardStore, match } = this.props
      const { params } = match
      const { domainId } = params
      dashboardStore.createDomainModelObj(domainId)
      dashboardStore.getDomainTypes()
   }

   render() {
      const { dashboardStore, match } = this.props
      const { domainModel } = dashboardStore
      const { params } = match
      const { domainId } = params

      if (domainModel) {
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
/**
 *  domainModel.domainPostsAPIStatus === API_SUCCESS &&
 */
