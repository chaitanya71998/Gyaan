import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

import { paths } from '../../Common/constants/NavigationConstants'

const { signInForm } = paths
const SignInRouteLazyComponent = lazy(() => import('./SignInRoute'))
export const authenticationRoute = [
   <Route
      key={signInForm}
      exact
      path={signInForm}
      component={SignInRouteLazyComponent}
   />
]
