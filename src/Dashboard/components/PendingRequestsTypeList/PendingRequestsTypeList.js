import React, { Component } from 'react'

import { RequestType } from '../../common/styledComponents'

import { Button, Div, RequestApprovals, Icons } from './styledComponents'
import { withRouter } from 'react-router-dom'
import { Typo14DarkBlueGreyHKGroteskRegular } from '../../../Common/style_guide/Typos'
import { IoIosCheckmarkCircle, IoIosCloseCircleOutline } from 'react-icons/io'
import { colors } from '../../../Common/style_guide/themes/Colors'

const { bright_blue, cool_grey } = colors
class PendingRequestsTypeList extends Component {
   dispalySeeAllLine = () => {
      const { requestsList, onClickSeeAll, shouldShowAll } = this.props
      if (requestsList.length > 3) {
         return shouldShowAll ? (
            <Button onClick={onClickSeeAll}>see less</Button>
         ) : (
            <Button onClick={onClickSeeAll}>see all</Button>
         )
      }
   }
   render() {
      const { requestsList, onClickSeeAll, limit, shouldShowAll } = this.props

      return (
         <Div>
            {requestsList.slice(0, limit).map(request => {
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
                           <IoIosCheckmarkCircle color={bright_blue} />
                        </Icons>
                     </RequestApprovals>
                  </RequestType>
               )
            })}
            {this.dispalySeeAllLine()}
         </Div>
      )
   }
}

export default withRouter(PendingRequestsTypeList)
