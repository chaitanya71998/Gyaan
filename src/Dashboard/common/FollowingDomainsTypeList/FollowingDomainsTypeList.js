import React, { Component } from 'react'

import { DomainTypeButton } from '../styledComponents'

import { Button, Div } from './styledComponents'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { goToSpecificPath } from "../../../Common/utils/NavigationUtils"

@inject('dashboardStore')
@observer
class FollowingDomainsTypeList extends Component {
   dispalySeeAllLine=()=>{
      const {domainsList,shouldShowAll,onClickSeeAll} = this.props;
      if(domainsList.length>3){
      return shouldShowAll ? (
          <Button onClick={onClickSeeAll}>see less</Button>
       ) : (
          <Button onClick={onClickSeeAll}>see all</Button>
       )
       }
    }
   onClickDomain = event => {
      const { dashboardStore } = this.props
      dashboardStore.createDomainModelObj(event.target.id)
      // this.props.history.push(`/followingDomain/${event.target.id}`)
      console.log(123);
      const path = `/followingDomain/${event.target.id}`
      goToSpecificPath(this.props.history,path);
   }

   render() {
      const { domainsList, limit } = this.props

      return (
         <>
            {domainsList.slice(0, limit).map(domain => {
               const { domainId, domainName } = domain
               return (
                  <DomainTypeButton
                     key={domainId}
                     id={domainId}
                     onClick={this.onClickDomain}
                  >
                     {domainName}
                  </DomainTypeButton>
               )
            })}
            {this.dispalySeeAllLine()}
         </>
      )
   }
}

export default withRouter(FollowingDomainsTypeList)
