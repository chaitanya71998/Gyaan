import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

import {
   setAccessToken,
   clearUserSession
} from '../../../Common/utils/StorageUtils'
import { AccessToken } from "../../services/AuthService/AuthService.fixture"




class AuthStore {
   @observable getUserSignInAPIStatus!: number
   @observable getUserSignInAPIError!: null | string
   @observable token!: string
   authAPIService: any

   constructor(authService: import("../../services/AuthService/AuthService.fixture").default | import("../../services/AuthService/AuthService.api").default) {
      this.authAPIService = authService
      this.init()
   }

   @action.bound
   userSignIn(requestObj: { username: string; password: string }) {
      const usersSignInPromise = this.authAPIService.getUserAPI(requestObj)
      return bindPromiseWithOnSuccess(usersSignInPromise)
         .to(this.setUserSignInAPIStatus, this.setUserSignInAPIResponse)
         .catch(this.setUserSignInAPIError)
   }
   @action.bound
   setUserSignInAPIResponse(response:any) {
      setAccessToken(response.access_token)
   }
   @action.bound
   setUserSignInAPIError(error: string | null) {
      this.getUserSignInAPIError = error
   }
   @action.bound
   setUserSignInAPIStatus(apiStatus: any) {
      this.getUserSignInAPIStatus = apiStatus
   }
   @action.bound
   userSignOut() {
      clearUserSession()
      this.clearStore()
   }
   @action.bound
   init() {
      this.getUserSignInAPIStatus = API_INITIAL
      this.getUserSignInAPIError = null
      this.token = ''
   }
   @action.bound
   clearStore() {
      this.init()
   }
}

export { AuthStore }
