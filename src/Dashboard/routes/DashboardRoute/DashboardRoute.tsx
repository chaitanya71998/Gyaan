import React, { Component } from 'react'
import { observer, inject, Provider } from 'mobx-react'
import { API_SUCCESS, API_FAILED } from '@ib/api-constants'
import { getLoadingStatus } from '@ib/api-utils'

import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import { paths } from '../../../Common/constants/NavigationConstants'

import Dashboard from '../../components/Dashboard'
import { TimeLine } from '../../components/TimeLine'
import { testIds } from '../../constants/testIds'

import { Div } from './styledComponents'
import { DashboardStore } from "../../stores/DashboardStore"

const { signInForm } = paths
const { dashboardRouteBlockId } = testIds

interface DashboardRouteProps{
   
}
interface InjectedProps extends DashboardRouteProps {
   dashboardStore: DashboardStore
}

@inject('dashboardStore')
@observer
class DashboardRoute extends Component {
   componentDidMount() {
      this.setDashboardData()
   }


getInjectedProps = (): InjectedProps => this.props as InjectedProps

getDashboardStore = () => {
   return this.getInjectedProps().dashboardStore
}
   setDashboardData() {
      
      this.getDashboardStore().getDomainTypes()
      this.getDashboardStore().getAllDomainsPosts()
   }
   render() {
      
      const { postsListAPIStatus, domainsListAPIStatus } = this.getDashboardStore();

      if (
         getLoadingStatus(postsListAPIStatus, domainsListAPIStatus) ===
         API_SUCCESS
      ) {
         return (
            <Div data-testid={dashboardRouteBlockId}>
               <Dashboard TimeLine={TimeLine} />
            </Div>
         )
      }
      return <LoadingWrapperWithFailure />
   }
}

export { DashboardRoute }
