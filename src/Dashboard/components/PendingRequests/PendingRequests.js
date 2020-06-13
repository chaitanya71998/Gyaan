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

      if (domainModel) {
         const { domainRequestsList } = domainModel
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
      return <></>
   }
}

export { PendingRequests }
