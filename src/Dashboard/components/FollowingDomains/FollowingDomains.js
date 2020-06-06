import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Div } from './styledComponents'
import DomainType from '../../common/DomainType'
import strings from '../../i18n/strings.json'

@inject('dashboardStore')
@observer
class FollowingDomains extends Component {

   render() {
      const { followingDomainsString } = strings
      const { dashboardStore, onToggle, toggleStatus } = this.props
      const { followingDomains,pendingForReview,suggestedDomains } = dashboardStore
      console.log(followingDomains,pendingForReview,suggestedDomains,1234567890)
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
