import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Div, Button } from './styledComponents'
import { DomainTypeButton } from '../../common/styledComponents'
import { withRouter } from 'react-router-dom'
import { paths } from '../../../Common/constants/NavigationConstants'

const { dashboard } = paths

@inject('dashboardStore')
@observer
class AllDomains extends Component {
   onClickAllDomainsButton = event => {
      const { dashboardStore } = this.props
      const { getPosts,clearCurrentDominId } = dashboardStore
      getPosts();
      clearCurrentDominId();
      this.props.history.push(dashboard)
   }
   render() {
      return (
         <Div>
            <DomainTypeButton onClick={this.onClickAllDomainsButton}>
               All Domains
            </DomainTypeButton>
         </Div>
      )
   }
}

export default withRouter(AllDomains)
