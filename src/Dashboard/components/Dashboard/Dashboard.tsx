import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Menu } from '../Menu'
import { MenuBlock, DashboardBlock, Div } from './styledComponents'
import { DashboardHeader } from '../DashboardHeader'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface DashboardProps extends RouteComponentProps{
   TimeLine: any
   pendingRequests?:any
}

@observer
class Dashboard extends Component<DashboardProps>{

   render() {
      const { TimeLine, pendingRequests } = this.props
      console.log(pendingRequests,":Dashboard")
      return (
         <DashboardBlock>
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
