import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { API_SUCCESS } from '@ib/api-constants'

import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import { withToggle } from '../../../Common/hoc/withToggle'

import strings from '../../i18n/strings.json'

import AllDomains from '../AllDomains'
import { PendingRequests } from '../PendingRequests'
import  FollowingDomains from '../FollowingDomains'
import { SuggestedDomains } from '../SuggestedDomains'
import { PendingForReview } from '../PendingForReview'

import { Div, Logo, LogoBlock } from './styledComponents'
import { DashboardStore } from "../../stores/DashboardStore"

const { comapanyName } = strings

const FollowingDomainsWithToogle = withToggle(FollowingDomains)
const PendingRequestsWithToogle = withToggle(PendingRequests)
const SuggestedDomainsWithToogle = withToggle(SuggestedDomains)
const PendingForReviewWithToogle = withToggle(PendingForReview)

interface MenuProps{
   pendingRequests?:any|undefined
}


interface InjectedProps extends MenuProps {
   dashboardStore: DashboardStore
}

interface PendingForRequestProps extends MenuProps{
   
}

@inject('dashboardStore')
@observer
class Menu extends Component<MenuProps> {

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getDashboardStore = () => {
      return this.getInjectedProps().dashboardStore
   }

   showPendingRequests = () => {
      const { pendingRequests } = this.props as PendingForRequestProps
      console.log(pendingRequests,":menu")
      if (pendingRequests) {
         return <PendingRequestsWithToogle pendingRequests={pendingRequests}/>
      }
      return <></>
   }

   render() {
      
      const { domainsListAPIStatus,followingDomains,pendingForReviewInDomains,suggestedDomains } = this.getDashboardStore();
      if (domainsListAPIStatus === API_SUCCESS) {
    
         return (
            <Div>
               <LogoBlock>
                  <Logo
                     src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/2a1a28bc-1607-43a8-a4b8-1ff44c3c3324.svg'
                     alt={comapanyName}
                  />
               </LogoBlock>

               <AllDomains />
               <FollowingDomainsWithToogle followingDomains={followingDomains} />
               <SuggestedDomainsWithToogle suggestedDomains={suggestedDomains}/>
               <PendingForReviewWithToogle pendingForReviewInDomains={pendingForReviewInDomains}/>
               {this.showPendingRequests()}
            </Div>
         )
      } else {
         return <LoadingWrapperWithFailure />
      }
   }
}

export { Menu }
