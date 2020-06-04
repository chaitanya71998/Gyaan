import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { observable } from 'mobx'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { Button, Div, Span, ToggleButton } from './styledComponents'
import { Typo12yellowOrangeHKGroteskSemiBold } from '../../../Common/style_guide/Typos'
import PendingRequestsTypeList from '../../components/PendingRequestsTypeList'

@observer
class MenuTypeRequests extends Component {
   @observable limit
   @observable shouldShowAll
   constructor(props) {
      super(props)
      this.shouldShowAll = false
      this.limit = 5
   }
   onClickSeeAll = event => {
      const { requestsList } = this.props
      this.shouldShowAll = !this.shouldShowAll
      const defaultLimit = 5
      this.limit = this.shouldShowAll ? requestsList.length : defaultLimit
   }
   displayRequests = () => {
      const { requestsList } = this.props
      return (
         <PendingRequestsTypeList
            onClickSeeAll={this.onClickSeeAll}
            limit={this.limit}
            shouldShowAll={this.shouldShowAll}
            requestsList={requestsList}
         />
      )
   }
   render() {
      const { toggleStatus, onToggle, requestsList, requests } = this.props

      return (
         <Div>
            <Button onClick={onToggle}>
               <Typo12yellowOrangeHKGroteskSemiBold>
                  {requests}
               </Typo12yellowOrangeHKGroteskSemiBold>
               <Span>
                  <Typo12yellowOrangeHKGroteskSemiBold>
                     {requestsList.length}
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

export default withRouter(MenuTypeRequests)
