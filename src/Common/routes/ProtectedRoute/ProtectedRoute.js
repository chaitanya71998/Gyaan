import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { getAccessToken } from '../../utils/StorageUtils'
import { paths } from '../../constants/NavigationConstants'
import { withRouter, Redirect, Switch } from 'react-router-dom'

const { signInForm } = paths
@observer
class ProtectedRoute extends Component {
   render() {
      alert(1)
      const { routes } = this.props
      return getAccessToken() ? <>{routes}</> : <Redirect to={signInForm} />
   }
}

export default withRouter(ProtectedRoute)
