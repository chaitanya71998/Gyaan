import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Div, Button } from './styledComponents'
import strings from "../../i18n/strings.json"
import { DomainTypeButton } from '../../common/styledComponents'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { paths } from '../../../Common/constants/NavigationConstants'
import { DashboardStore } from "../../stores/DashboardStore"

const { dashboard } = paths

const { allDomainsString } = strings
interface AllDomainsProps extends RouteComponentProps {

}
interface InjectedProps extends AllDomainsProps {
   dashboardStore: DashboardStore
}

@inject('dashboardStore')
@observer
class AllDomains extends Component<AllDomainsProps>{
   onClickAllDomainsButton = event => {
      const { getAllDomainsPosts, clearCurrentDomainId } = this.getDashboardStore()
      getAllDomainsPosts()
      clearCurrentDomainId()
      this.props.history.push(dashboard)
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getDashboardStore = () => {
      return this.getInjectedProps().dashboardStore
   }

   render() {
      return (
         <Div>
            <DomainTypeButton onClick={this.onClickAllDomainsButton}>
               <span>{allDomainsString}</span>
            </DomainTypeButton>
         </Div>
      )
   }
}

export default withRouter(AllDomains)
