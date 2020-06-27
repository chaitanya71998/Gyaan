import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from "mobx"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { withRouter, RouteComponentProps } from "react-router-dom"

import { goToSpecificPath } from "../../../Common/utils/NavigationUtils"

import strings from "../../i18n/strings.json"

import { Div, Button, DomainTypeButton } from './styledComponents'
import { ToggleButton } from "../PendingRequests/styledComponents"

interface FollowingDomainsProps extends RouteComponentProps {
   followingDomains: any
   onToggle: any
   toggleStatus: boolean
}
interface FollowingDomainsState {
   limit: boolean;
   shouldShowAll: any;
}

@observer
class FollowingDomains extends Component<FollowingDomainsProps, FollowingDomainsState>{
   @observable limit: number
   @observable shouldShowAll: boolean
   constructor(props: Readonly<FollowingDomainsProps>) {
      super(props)
      this.shouldShowAll = false
      this.limit = 3
   }

   onClickDomain = event => {
      const path = `/followingDomain/${event.target.id}`

      goToSpecificPath(this.props.history, path)
   }
   onClickSeeAll = event => {
      const { followingDomains } = this.props

      this.shouldShowAll = !this.shouldShowAll
      const defaultLimit = 3
      this.limit = this.shouldShowAll ? followingDomains.length : defaultLimit
   }

   dispalySeeAllLine = () => {
      const { followingDomains } = this.props
      if (followingDomains.length > 3) {
         return this.shouldShowAll ? (
            <Button onClick={this.onClickSeeAll}>see less</Button>
         ) : (
               <Button onClick={this.onClickSeeAll}>see all</Button>
            )
      }
   }

   displayDomains = () => {
      const { followingDomains } = this.props

      return (
         <>
            {followingDomains.slice(0, this.limit).map(domain => {
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
   render() {
      const { followingDomainsString } = strings
      const { onToggle, toggleStatus } = this.props



      return (
         <Div>

            <Button onClick={onToggle}>
               <span>{followingDomainsString}</span>
               <ToggleButton>
                  {toggleStatus ? (
                     <IoIosArrowDown onClick={onToggle} />
                  ) : (
                        <IoIosArrowUp onClick={onToggle} />
                     )}
               </ToggleButton>
            </Button>
            {toggleStatus ? <></> : this.displayDomains()}

         </Div>
      )

   }
}

export default withRouter(FollowingDomains) 
