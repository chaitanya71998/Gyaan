import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import strings from '../../i18n/strings.json'
import MenuTypeRequests from '../../common/MenuTypeRequests'

import { Div } from './styledComponents'

@inject('dashboardStore')
@observer
class PendingRequests extends Component {
   render() {
      const { requests } = strings
      const { onToggle, toggleStatus, dashboardStore } = this.props
      const { domainModel } = dashboardStore
      const { domainRequestsList } = domainModel

      if (domainRequestsList) {
         return (
            <Div>
               <MenuTypeRequests
                  toggleStatus={toggleStatus}
                  requests={requests}
                  onToggle={onToggle}
                  requestsList={domainRequestsList}
               />
            </Div>
         )
      }
      return <p>Loading...</p>
   }
}

export { PendingRequests }
