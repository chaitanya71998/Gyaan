import React from 'react'
import { createMemoryHistory } from 'history'
import { render, waitFor } from '@testing-library/react'
import { Provider } from 'mobx-react'

import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import { AuthStore } from '../../../Authentication/stores/AuthStore'
import { paths } from '../../../Common/constants/NavigationConstants'
import { withRouter, Router, Route } from 'react-router-dom'
import AuthService from '../../../Authentication/services/AuthService'

import postsList from '../../fixtures/postsList.json'
import domainTypes from '../../fixtures/domainTypes.json'
import domainDescription from '../../fixtures/domainDescription.json'
import { testIds } from '../../constants/testIds'
import DashboardService from '../../services/DashboardService'
import { DashboardStore } from '../../stores/DashboardStore'

import PostsRoute from '.'

const { allDomainsPostsPath, followingDomainPostPath } = paths
const { loadingViewId } = testIds
describe('PostsRoute tests', () => {
   let dashboardStore
   let dashboardService
   let authService
   let authStore
   const LocationDisplay = withRouter(({ location }) => (
      <div data-testid='location-display'>{location.pathname}</div>
   ))

   beforeEach(() => {
      authService = new AuthService()
      authStore = new AuthStore(authService)
      dashboardService = new DashboardService()
      dashboardStore = new DashboardStore(dashboardService)
   })
   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should test,whether loadingWrapper appears on screen for all domains post path ', async () => {
      const postId = 0
      const history = createMemoryHistory()
      const route = `/allDomainPosts/post/${postId}`
      history.push(route)
      const { getByTestId } = render(
         <Provider dashboardStore={dashboardStore} authStore={authStore}>
            <Router history={history}>
               <Route path={allDomainsPostsPath}>
                  <PostsRoute />
               </Route>
            </Router>
         </Provider>
      )
      await waitFor(() => {
         getByTestId(loadingViewId)
      })
   })

   it('should test all domains page post through PostRoute using parmas', async () => {
      const postId = 0
      const history = createMemoryHistory()
      const route = `/allDomainPosts/post/${postId}`
      history.push(route)

      const mockAllDomainsPostsPromise = resolveWithTimeout(postsList)
      const mockGetAllDomainsPostsAPI = jest.fn()

      mockGetAllDomainsPostsAPI.mockReturnValue(mockAllDomainsPostsPromise)
      dashboardService.getAllDomainsPostsAPI = mockGetAllDomainsPostsAPI

      const { getByTestId } = render(
         <Provider dashboardStore={dashboardStore} authStore={authStore}>
            <Router history={history}>
               <Route path={allDomainsPostsPath}>
                  <PostsRoute />
               </Route>
            </Router>
         </Provider>
      )

      await waitFor(() => {
         getByTestId('post-container')
      })
   })

   it('should test following domains post  through PostRoute using parmas', async () => {
      const postId = 0
      const currentDomainId = 1
      const history = createMemoryHistory()
      const route = `/followingDomain/${currentDomainId}/post/${postId}`
      history.push(route)

      const followingDomainPostsPromise = resolveWithTimeout(postsList)
      const mockDomainTypesPromise = resolveWithTimeout(domainTypes)
      const mockDomainDescriptionPromise = resolveWithTimeout(domainDescription)
      const mockGetDomainPostsAPI = jest.fn()
      const mockGetDomainTypesAPI = jest.fn()
      const mockGetDomainDescriptionAPI = jest.fn()
      mockGetDomainPostsAPI.mockReturnValue(followingDomainPostsPromise)
      dashboardService.domainPostsAPI = mockGetDomainPostsAPI

      mockGetDomainTypesAPI.mockReturnValue(mockDomainTypesPromise)
      dashboardService.domainTypesAPI = mockGetDomainTypesAPI

      mockGetDomainDescriptionAPI.mockReturnValue(mockDomainDescriptionPromise)
      dashboardService.domainDescriptionAPI = mockGetDomainDescriptionAPI

      const { getByTestId } = render(
         <Provider dashboardStore={dashboardStore} authStore={authStore}>
            <Router history={history}>
               <Route path={followingDomainPostPath}>
                  <PostsRoute />
               </Route>
            </Router>
         </Provider>
      )

      await waitFor(() => {
         getByTestId('post-container')
      })
   })
   it('should test,whether loadingWrapper appears on screen for following domains post path ', async () => {
      const postId = 0
      const currentDomainId = 1
      const history = createMemoryHistory()
      const route = `/followingDomain/${currentDomainId}/post/${postId}`
      history.push(route)
      const { getByTestId } = render(
         <Provider dashboardStore={dashboardStore} authStore={authStore}>
            <Router history={history}>
               <Route path={followingDomainPostPath}>
                  <PostsRoute />
               </Route>
            </Router>
         </Provider>
      )
      await waitFor(() => {
         getByTestId(loadingViewId)
      })
   })
})
