import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Div } from './styledComponents'
import DomainType from '../../common/DomainType'
import strings from '../../i18n/strings.json'

@inject('dashboardStore')
@observer
class FollowingDomains extends Component {
   componentDidMount() {
      this.followingDomains()
   }
   async followingDomains() {
      const { dashboardStore } = this.props
      await dashboardStore.getDomainTypes()
   }
   render() {
      const { followingDomainsString } = strings
      const { dashboardStore, onToggle, toggleStatus } = this.props
      const { followingDomains } = dashboardStore

      if (followingDomains) {
         return (
            <Div>
               <DomainType
                  toggleStatus={toggleStatus}
                  domainName={followingDomainsString}
                  onToggle={onToggle}
                  domainsList={followingDomains}
               />
            </Div>
         )
      }
      return <p>Loading</p>
   }
}

export { FollowingDomains }
