import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import {
   Div,
   Button,
   MenuButton,
   Number,
   NumberLiteral,
   Name,
   PendingForReviesLiteral
} from './styledComponents'
import strings from '../../i18n/strings.json'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { observable } from 'mobx'

const { pendingForReview } = strings

@inject('dashboardStore')
@observer
class PendingForReview extends Component {
   @observable limit
   @observable shouldShowAll
   constructor(props) {
      super(props)
      this.shouldShowAll = false
      this.limit = 3
   }
   dispalySeeAllLine = () => {
      const { dashboardStore } = this.props
      const { pendingForReview } = dashboardStore
      if (pendingForReview.length > 3) {
         return shouldShowAll ? (
            <Button onClick={onClickSeeAll}>see less</Button>
         ) : (
            <Button onClick={onClickSeeAll}>see all</Button>
         )
      }
   }
   onClickSeeAll = event => {
      const { dashboardStore } = this.props
      const { pendingForReview } = dashboardStore

      this.shouldShowAll = !this.shouldShowAll
      const defaultLimit = 3
      this.limit = this.shouldShowAll ? pendingForReview.length : defaultLimit
   }

   displayDomains = () => {
      const { dashboardStore } = this.props
      const { pendingForReview } = dashboardStore

      return (
         <>
            {pendingForReview.slice(0, this.limit).map(domain => {
               const { domainId, domainName, pendingCount } = domain

               return (
                  <MenuButton key={domainId}>
                     <Name>{domainName}</Name>
                     <Number>
                        <NumberLiteral>{pendingCount}</NumberLiteral>
                     </Number>
                  </MenuButton>
               )
            })}
            {this.dispalySeeAllLine()}}
         </>
      )
   }

   render() {
      const { toggleStatus, dashboardStore, onToggle } = this.props
      return (
         <Div>
            <Div>
               <Button onClick={onToggle}>
                  <PendingForReviesLiteral>
                     {pendingForReview}
                  </PendingForReviesLiteral>

                  <span>
                     {toggleStatus ? (
                        <IoIosArrowDown onClick={onToggle} />
                     ) : (
                        <IoIosArrowUp onClick={onToggle} />
                     )}
                  </span>
               </Button>
               {toggleStatus ? <></> : this.displayDomains()}
            </Div>
         </Div>
      )
   }
}

export { PendingForReview }
