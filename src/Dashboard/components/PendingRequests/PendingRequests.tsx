import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { IoIosArrowDown, IoIosArrowUp, IoIosCloseCircleOutline, IoIosCheckmarkCircle } from "react-icons/io"
import { observable } from "mobx"

import { Typo14DarkBlueGreyHKGroteskRegular, Typo12yellowOrangeHKGroteskSemiBold, Typo14yellowOrangeHKGroteskSemiBold } from "../../../Common/style_guide/Typos/index.js"
import { colors } from "../../../Common/style_guide/themes/Colors.js"

import strings from '../../i18n/strings.json'
import { RequestType } from "../../common/styledComponents.js"

import { Div, Button, Span, ToggleButton, RequestApprovals, Icons } from './styledComponents'
import BlueTick from "../../../Common/components/Icons/BlueTick/index.js"

interface PendingRequestsProps {
   onToggle: any
   toggleStatus: boolean
   pendingRequests: any
}


const { bright_blue, cool_grey } = colors

@observer
class PendingRequests extends Component<PendingRequestsProps>{
   @observable limit: number
   @observable shouldShowAll: boolean
   constructor(props: Readonly<PendingRequestsProps>) {
      super(props)
      this.shouldShowAll = false
      this.limit = 3
   }
   onClickSeeAll = event => {
      const { pendingRequests } = this.props

      this.shouldShowAll = !this.shouldShowAll
      const defaultLimit = 3
      this.limit = this.shouldShowAll ? pendingRequests.length : defaultLimit
   }
   dispalySeeAllLine = () => {
      const { pendingRequests } = this.props
      if (pendingRequests.length > 3) {
         return this.shouldShowAll ? (
            <Button onClick={this.onClickSeeAll}>see less</Button>
         ) : (
               <Button onClick={this.onClickSeeAll}>see all</Button>
            )
      }
   }

   displayRequests = () => {
      const { pendingRequests } = this.props

      return (
         <>
         {
         pendingRequests.slice(0, this.limit).map(request => {
         const { userId, username } = request
         return (
           
            <RequestType key={userId} id={userId}>

               <Typo14DarkBlueGreyHKGroteskRegular>
                  {username.toUpperCase()}
               </Typo14DarkBlueGreyHKGroteskRegular>

               <RequestApprovals>
                  <Icons>
                     <IoIosCloseCircleOutline color={cool_grey} />{' '}
                  </Icons>
                  <Icons>
                     <BlueTick/>
                  </Icons>
               </RequestApprovals>
            </RequestType>
         )
      })}
       {this.dispalySeeAllLine()}
      </>)
   }





   render() {
      const { requests } = strings
      const { onToggle, toggleStatus, pendingRequests } = this.props

      return (
         <Div>
            <Button onClick={onToggle}>
               <Span>
                  {requests}
               </Span>
               <Span>
                  <Typo12yellowOrangeHKGroteskSemiBold>
                     {pendingRequests.length}
                  </Typo12yellowOrangeHKGroteskSemiBold>
                  <ToggleButton>
                     {toggleStatus ? (
                        <IoIosArrowDown onClick={onToggle} />
                     ) : (
                           <IoIosArrowUp onClick={onToggle} />
                        )}
                  </ToggleButton>
               </Span>
            </Button>
            {toggleStatus ? <></> : this.displayRequests()}
           
         </Div>
      )
   }
}

export { PendingRequests }
