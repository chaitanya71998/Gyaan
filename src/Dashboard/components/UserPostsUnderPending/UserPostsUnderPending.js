import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Div } from './styledComponents'

@observer
class UserPostsUnderPending extends Component {
   render() {
      return (
         <Div>
            <p>UserPostsUnderPending</p>
         </Div>
      )
   }
}

export { UserPostsUnderPending }
