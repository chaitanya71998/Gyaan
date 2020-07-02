import React, { lazy } from 'react'
import { paths } from '../../Common/constants/NavigationConstants'
import ProtectedRoute from '../../Common/routes/ProtectedRoute/ProtectedRoute'

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

const RoutePathsComponents = [
   {
      path: dashboard,
      component: DashboardRouteComponent
   },
   {
      path: createPostPath,
      component: CreatePostTestFileComponent
   },
   {
      path: followingDomainPath,
      component: DomainRouteComponent
   },
   {
      path: followingDomainPostPath,
      component: PostsRouteComponent
   },
   {
      path: allDomainsPostsPath,
      component: PostsRouteComponent
   }
]

export const DashboardRoutes = RoutePathsComponents.map(route => (
   <ProtectedRoute
      key={route.path}
      exact
      path={route.path}
      component={route.component}
   />
))
