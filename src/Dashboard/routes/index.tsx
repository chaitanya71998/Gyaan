import React, { lazy } from 'react'
import { paths } from '../../Common/constants/NavigationConstants'
import { Route } from 'react-router-dom'
import HomePage from '../../Common/components/HomePage'
const DashboardRouteComponent = lazy(() => import('./DashboardRoute'))
const DomainRouteComponent = lazy(() => import('./DomainRoute'))
const CreatePostTestFileComponent = lazy(() => import('./CreatePostRoute'))
const PostsRouteComponent = lazy(() => import('./PostsRoute'))
const {
   dashboard,
   createPostPath,
   followingDomainPath,
   followingDomainPostPath,
   allDomainsPostsPath
} = paths

export const DashboardRoutes = [
   <Route exact path={dashboard} component={DashboardRouteComponent} />,
   <Route
      exact
      path={createPostPath}
      component={CreatePostTestFileComponent}
   />,
   <Route exact path={followingDomainPath} component={DomainRouteComponent} />,
   <Route
      exact
      path={followingDomainPostPath}
      component={PostsRouteComponent}
   />,
   <Route exact path={allDomainsPostsPath} component={PostsRouteComponent} />,
   <Route exact path='/' component={HomePage} />
]
