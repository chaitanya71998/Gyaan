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

interface PendingForReviewProps{
   pendingForReviewInDomains:any;
   toggleStatus:boolean;
   onToggle:any;
}
interface PendingForReviewState{
   limit:number;
   shouldShowAll:boolean;
}
@observer
class PendingForReview extends Component<PendingForReviewProps,PendingForReviewState> {
   @observable limit
   @observable shouldShowAll
   constructor(props) {
      super(props)
      this.shouldShowAll = false
      this.limit = 3
   }
   dispalySeeAllLine = () => {
      const { pendingForReviewInDomains } = this.props
      
      if (pendingForReviewInDomains.length > 3) {
         return this.shouldShowAll ? (
            <Button onClick={this.onClickSeeAll}>see less</Button>
         ) : (
            <Button onClick={this.onClickSeeAll}>see all</Button>
         )
      }
   }
   onClickSeeAll = event => {
      const { pendingForReviewInDomains } = this.props

      this.shouldShowAll = !this.shouldShowAll
      const defaultLimit = 3
      this.limit = this.shouldShowAll ? pendingForReviewInDomains.length : defaultLimit
   }

   displayDomains = () => {
      const { pendingForReviewInDomains } = this.props

      return (
         <>
            {pendingForReviewInDomains.slice(0, this.limit).map(domain => {
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
            {this.dispalySeeAllLine()}
         </>
      )
   }

   render() {
      const { toggleStatus, onToggle } = this.props
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
