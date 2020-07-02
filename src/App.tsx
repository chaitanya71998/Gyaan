import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { observer, Provider } from 'mobx-react'

import './App.css'
import stores from './Common/stores'
import HomePage from './Common/components/HomePage'
import { paths } from './Common/constants/NavigationConstants'
import { authenticationRoute } from './Authentication/routes'
import { DashboardRoutes } from './Dashboard/routes'

const { signInForm } = paths

@observer
class App extends React.Component {
   render() {
      return (
         <Provider {...stores}>
            <Suspense fallback={<div>Loading...</div>}>
               <BrowserRouter>
                  <Switch>
                     <Route exact path={signInForm}>
                        {authenticationRoute}
                     </Route>
                     {DashboardRoutes}

                     <Route path='/HomePage'>
                        <HomePage />
                     </Route>
                     <Route path='/'>
                        <HomePage />
                     </Route>
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
