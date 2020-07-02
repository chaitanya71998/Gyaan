import React, { lazy } from 'react'
import { paths } from '../../Common/constants/NavigationConstants'

const DashboardRouteComponent = lazy(() => import('./DashboardRoute'))
const DomainRouteComponent = lazy(() => import('./DomainRoute'))
const CreatePostTestFileComponent = lazy(() => import('./CreatePostRoute'))

const { dashboard, createPostPath, followingDomainPath } = paths

export const DashboardRoutes = [
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
   }
]
