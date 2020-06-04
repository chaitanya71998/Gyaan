import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Pending extends Component {
   render() {
      return (
         <div>
            <p>Pending</p>
         </div>
      )
   }
}

export { Pending }
