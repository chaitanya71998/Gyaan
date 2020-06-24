import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { observer, Provider } from 'mobx-react'

import './App.css'
import stores from './Common/stores'
import HomePage from './Common/components/HomePage'
import { paths } from './Common/constants/NavigationConstants'
import { authenticationRoute } from './Authentication/routes'
import { DashboardRoute } from './Dashboard/routes/DashboardRoute'
import DomainRoute from './Dashboard/routes/DomainRoute'

import { FollowingDomains } from './Dashboard/components/FollowingDomains'
import PostsRoute from './Dashboard/routes/PostsRoute'
import { getAccessToken } from './Common/utils/StorageUtils'
import Dashboard from './Dashboard/components/Dashboard'
import { CreatePost } from './Dashboard/components/CreatePost'
import { CreatePostRoute } from './Dashboard/routes/CreatePostRoute/CreatePostRoute'
import { CreatePostTestFile } from './Dashboard/routes/CreatePostRoute'
import { AuthStore } from './Authentication/stores/AuthStore'
import { SignInRouteProps } from './Authentication/routes/SignInRoute/SignInRoute'
import { DashboardStore } from './Dashboard/stores/DashboardStore'
const {
   signInForm,
   dashboard,
   createPostPath,
   followingDomainPostPath,
   followingDomainPath,
   allDomainsPostsPath
} = paths

@observer
class App extends React.Component {
   render() {
      return (
         <Provider {...stores}>
            <BrowserRouter>
               <Switch>
                  <Route exact path={signInForm}>
                     {authenticationRoute}
                  </Route>
                  {/*<Route exact path={dashboard}>
                     <DashboardRoute />
                  </Route>
                  <Route exact path={createPostPath}>
                     <CreatePostTestFile />
                  </Route>

                  <Route exact path={followingDomainPath}>
                     <DomainRoute />
                  </Route>
                  <Route exact path={followingDomainPostPath}>
                     <PostsRoute />
                  </Route>
                  <Route exact path={allDomainsPostsPath}>
                     <PostsRoute />
      </Route>*/}

                  <Route path='/HomePage'>
                     <HomePage />
                  </Route>

                  <Route path='/'>
                     <HomePage />
                  </Route>
               </Switch>
            </BrowserRouter>
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
