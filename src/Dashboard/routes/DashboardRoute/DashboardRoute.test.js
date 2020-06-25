import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'
import { getByTestId } from '@testing-library/react'

import DashboardService from '../../services/DashboardService'
import { DashboardStore } from '../../stores/DashboardStore'
import { testIds } from '../../constants/testIds'

import { DashboardRoute } from '.'
import AuthService from '../../../Authentication/services/AuthService'
import { AuthStore } from '../../../Authentication/stores/AuthStore'
import { API_SUCCESS } from '@ib/api-constants'
import domainTypes from '../../fixtures/domainTypes.json'
import postsList from '../../fixtures/postsList.json'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

const { dashboardRouteBlockId, loadingViewId } = testIds
describe('it tests dashboardRoute component', () => {
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

   it('should test, whether dashboardBlock appears on screen ', async () => {
      let { postsListAPIStatus, domainsListAPIStatus } = dashboardStore

      const mockAllDomainsPostsPromise = resolveWithTimeout(postsList)

      const mockDomainTypesPromise = resolveWithTimeout(domainTypes)

      const mockGetAllDomainsPostsAPI = jest.fn()
      const mockGetDomainTypes = jest.fn()

      mockGetAllDomainsPostsAPI.mockReturnValue(mockAllDomainsPostsPromise)
      dashboardService.getAllDomainsPostsAPI = mockGetAllDomainsPostsAPI

      mockGetDomainTypes.mockReturnValue(mockDomainTypesPromise)
      dashboardService.domainTypesAPI = mockGetDomainTypes
      const { getByTestId } = render(
         <Provider dashboardStore={dashboardStore} authStore={authStore}>
            <Router history={createMemoryHistory()}>
               <DashboardRoute />
            </Router>
         </Provider>
      )

      await waitFor(() => {
         getByTestId(dashboardRouteBlockId)
      })
   })

   it('should test,whether loadingWrapper appears on screen ', async () => {
      const { getByTestId } = render(
         <Provider dashboardStore={dashboardStore} authStore={authStore}>
            <Router history={createMemoryHistory()}>
               <DashboardRoute />
            </Router>
         </Provider>
      )
      await waitFor(() => {
         getByTestId(loadingViewId)
      })
   })
})
