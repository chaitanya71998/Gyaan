import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'

import { mockRemoveCookie, mockSetCookie } from "../../../Common/utils/SetupTests"

import AuthAPI from '../../services/AuthService/AuthService.fixture';
import userSignInResponse from '../../fixtures/userSignInResponse.json';

import { AuthStore } from './index.js'

describe('AuthStore Tests', () => {
   let authAPI: AuthAPI | import("../../services/AuthService/AuthService.api").default
   let authStore: AuthStore;

   beforeEach(() => {
      authAPI = new AuthAPI()
      authStore = new AuthStore(authAPI)
   })

   it('should test initialising auth store', () => {
      expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL)
      expect(authStore.getUserSignInAPIError).toBe(null)
   })

   it('should test userSignInAPI data fetching state', () => {
      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }

      const mockLoadingPromise = new Promise(function (resolve, reject) { })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      authAPI.getUserAPI = mockSignInAPI

      authStore.userSignIn(requestObject)
      expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING)
   })

   it('should test userSignInAPI success state', async () => {
      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }

      await authStore.userSignIn(requestObject)
      expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS)
      expect(mockSetCookie).toBeCalled()
   })

   it('should test userSignInAPI failure state', async () => {
      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }

      const mockFailurePromise = new Promise(function (resolve, reject) {
         reject(new Error('error'))
      })

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      authAPI.getUserAPI = mockSignInAPI

      authStore = new AuthStore(authAPI)
      await authStore.userSignIn(requestObject)

      expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED)
      expect(authStore.getUserSignInAPIError).toBe('error')
   })

   it('should test user sign-out', () => {
      authStore.userSignOut()
      expect(mockRemoveCookie).toBeCalled()
      expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL)
      expect(authStore.getUserSignInAPIError).toBe(null)
   })
})
