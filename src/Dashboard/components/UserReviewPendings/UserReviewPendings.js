import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Div } from './styledComponents'

@observer
class UserReviewPendings extends Component {
   render() {
      return (
         <Div>
            <p>UserReviewPendings</p>
         </Div>
      )
   }
}

export { UserReviewPendings }
