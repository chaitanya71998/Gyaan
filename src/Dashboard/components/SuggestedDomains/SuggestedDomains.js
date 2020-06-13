import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import {
   Div,
   Button,
   MenuButton,
   Follow,
   Cancel,
   Name
} from './styledComponents'
import strings from '../../i18n/strings.json'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { observable } from 'mobx'

const { suggestedDomains } = strings

@inject('dashboardStore')
@observer
class SuggestedDomains extends Component {
   @observable limit
   @observable shouldShowAll
   constructor(props) {
      super(props)
      this.shouldShowAll = false
      this.limit = 3
   }
   dispalySeeAllLine=()=>{
      const {dashboardStore} = this.props;
      const {suggestedDomains} = dashboardStore;
      if(suggestedDomains.length>3){
      return this.shouldShowAll ? (
          <Button onClick={this.onClickSeeAll}>see less</Button>
       ) : (
          <Button onClick={this.onClickSeeAll}>see all</Button>
       )
       }
    }
   onClickSeeAll = event => {
      const { dashboardStore } = this.props
      const { suggestedDomains } = dashboardStore

      this.shouldShowAll = !this.shouldShowAll
      const defaultLimit = 3
      this.limit = this.shouldShowAll ? suggestedDomains.length : defaultLimit
   }

   displayDomains = () => {
      const { dashboardStore } = this.props
      const { suggestedDomains } = dashboardStore

      return (
         <>
            {suggestedDomains.slice(0, this.limit).map(domain => {
               const { domainId, domainName, isRequested } = domain;
               
               return (
                  <MenuButton key={domainId}>
                     <Name>{domainName}</Name>
                     {isRequested ?<Cancel>Cancel</Cancel>:<Follow>Follow</Follow>}
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
            <Button onClick={onToggle}>
               {suggestedDomains}
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
      )
   }
}

export { SuggestedDomains }
