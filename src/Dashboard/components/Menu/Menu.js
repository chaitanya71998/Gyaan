import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from "mobx"
import { Redirect } from "react-router-dom"
import { API_SUCCESS } from "@ib/api-constants"

import LoadingWrapperWithFailure from "../../../Common/components/LoadingWrapperWithFailure"
import { SecondaryButton } from '../../../Common/components/ButtonElement/styledComponents'
import { paths } from "../../../Common/constants/NavigationConstants"
import { withToggle } from '../../../Common/hoc/withToggle'

import strings from '../../i18n/strings.json'
import AllDomains from '../AllDomains'
import { PendingRequests } from '../PendingRequests'
import { FollowingDomains } from '../FollowingDomains'
import { SuggestedDomains } from "../SuggestedDomains"
import { PendingForReview } from "../PendingForReview"

import { Div, Logo, LogoBlock } from './styledComponents'

const { comapanyName } = strings

const FollowingDomainsWithToogle = withToggle(FollowingDomains)
const PendingRequestsWithToogle = withToggle(PendingRequests)
const SuggestedDomainsWithToogle = withToggle(SuggestedDomains);
const PendingForReviewWithToogle = withToggle(PendingForReview);
const { signInForm } = paths;


@inject('authStore','dashboardStore')
@observer
class Menu extends Component {
  
   showPendingRequests=()=>{
      const { pendingRequests }= this.props;
      if(pendingRequests){
         return  <PendingRequestsWithToogle/>
      }
      return <></>;
  }

   render() {
      
     const{ dashboardStore } = this.props;
     const { domainsListAPIStatus } = dashboardStore;
     if(domainsListAPIStatus===API_SUCCESS){
      
      return (
         <Div>
            <LogoBlock>
               <Logo
                  src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/2a1a28bc-1607-43a8-a4b8-1ff44c3c3324.svg'
                  alt={comapanyName}
               />
            </LogoBlock>
            
            <AllDomains />
            <FollowingDomainsWithToogle />
            <SuggestedDomainsWithToogle/>
            <PendingForReviewWithToogle/>
            {this.showPendingRequests()}
            
            
         </Div>
      )
     }
     else{
       return  <LoadingWrapperWithFailure/>
     }
   }
}

export { Menu }
