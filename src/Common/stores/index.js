import { AuthStore } from '../../Authentication/stores/AuthStore'
import AuthFixtureService from '../../Authentication/services/AuthService/AuthService.fixture'
import AuthAPIService from '../../Authentication/services/AuthService/AuthService.api'

import { DashboardStore } from '../../Dashboard/stores/DashboardStore'
import DashboardAPIService from '../../Dashboard/services/DashboardService/DashboardService.api'
import DashboardFixtureService from '../../Dashboard/services/DashboardService/DashboardService.fixture'

export const isFixtures = true

const getAuthServiceInstance = () => {
   if (isFixtures) {
      return new AuthFixtureService()
   } else {
      return new AuthAPIService()
   }
}
const authStore = new AuthStore(getAuthServiceInstance())

const getDashboardServiceInstance = () => {
   if (isFixtures) {
      return new DashboardFixtureService()
   } else {
      return new DashboardAPIService()
   }
}
const dashboardStore = new DashboardStore(getDashboardServiceInstance())

export default {
   authStore,
   dashboardStore
}
