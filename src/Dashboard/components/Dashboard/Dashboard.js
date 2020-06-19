import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Menu } from '../Menu'
import { MenuBlock, DashboardBlock, Div } from './styledComponents'
import { DashboardHeader } from '../DashboardHeader'
import { withRouter } from 'react-router-dom'

@observer
class Dashboard extends Component {
   render() {
      const { TimeLine, pendingRequests } = this.props

      return (
         <DashboardBlock  >
            <MenuBlock>
               <Menu pendingRequests={pendingRequests} />
            </MenuBlock>
            <Div>
               <DashboardHeader />
               <TimeLine />
            </Div>
         </DashboardBlock>
      )
   }
}

export default withRouter(Dashboard)
