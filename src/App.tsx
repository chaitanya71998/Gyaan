import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { observer, Provider } from 'mobx-react'

import './App.css'
import stores from './Common/stores'
import { paths } from './Common/constants/NavigationConstants'
import { authenticationRoute } from './Authentication/routes'
import { DashboardRoutes } from './Dashboard/routes'
import ProtectedRoute from './Common/routes/ProtectedRoute/ProtectedRoute'

const { signInForm } = paths

@observer
class App extends React.Component {
   render() {
      alert(12)
      return (
         <Provider {...stores}>
            <Suspense fallback={<div>Loading...</div>}>
               <BrowserRouter>
                  <Switch>
                     {authenticationRoute}
                     <ProtectedRoute routes={DashboardRoutes} />
                  </Switch>
               </BrowserRouter>
            </Suspense>
         </Provider>
      )
   }
}
export default App

/*
<Route exact path = "followingDomains/:id">
            <DomainRoute/>
          </Route>
*/
