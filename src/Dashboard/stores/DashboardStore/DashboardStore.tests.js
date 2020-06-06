// import {
//     API_SUCCESS,
//     API_FAILED,
//     API_FETCHING,
//     API_INITIAL
//  } from '@ib/api-constants'
//  import Cookie from 'js-cookie'
 
//  import Dashboardservice from "../../services/DashboardService/DashboardService.fixture";
// import { DashboardStore } from "./DashboardStore";


// DashboardStore
//  let mockSetCookie = jest.fn()
//  global.mockSetCookie = mockSetCookie
//  Cookie.set = mockSetCookie;

//  describe('Dashboard Tests', () => {
//     let dashboardService;
//     let dashboardStore;
 
//     beforeEach(() => {
//         dashboardService = new Dashboardservice()
//        dashboardStore = new AuthStore(dashboardService)
//     })
 
//     it('should test initialising dashboard store', () => {
//        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL)
//        expect(dashboardStore.postsListAPIStatus ).toBe( API_INITIAL)
//       expect(dashboardStore.domainsListAPIStatus ).toBe( API_INITIAL)
//       expect(dashboardStore.postListAPIError ).toBe( null)
//       expect(dashboardStore.domainsListAPIError ).toBe( null)
//       expect(dashboardStore.postsList ).toBe( [])
//       expect(dashboardStore.domainTypes ).toBe( {})
//     })
 
//     it('should test dashboard  getPosts in fetching state', () => {
       

//        const mockLoadingPromise = new Promise(function(resolve, reject) {})
//        const allDomainsPostsAPI = jest.fn()
//        allDomainsPostsAPI.mockReturnValue(mockLoadingPromise)
//        dashboardService.allDomainsPostsAPI = allDomainsPostsAPI
 
//        dashboardStore.getPosts(requestObject);
//        expect(dashboardStore.postsListAPIStatus).toBe(API_FETCHING);
//     })
//     it('should test dashboard getDomainTypes in fetching state')
 
//     it('should test userSignInAPI success state', async () => {
//        const requestObject = {
//           username: 'test-user',
//           password: 'test-password'
//        }
 
//        const mockSuccessPromise = new Promise(function(resolve, reject) {
//           resolve(setUserSignInAPIResponse)
//        })
//        const mockSignInAPI = jest.fn()
//        mockSignInAPI.mockReturnValue(mockSuccessPromise)
//        authAPI.getUserAPI = mockSignInAPI
 
//        await authStore.userSignIn(requestObject)
//        expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS)
//        expect(mockSetCookie).toBeCalled()
//     })
 
//     it('should test userSignInAPI failure state', async () => {
//        const requestObject = {
//           username: 'test-user',
//           password: 'test-password'
//        }
 
//        const mockFailurePromise = new Promise(function(resolve, reject) {
//           reject(new Error('error'))
//        })
 
//        const mockSignInAPI = jest.fn()
//        mockSignInAPI.mockReturnValue(mockFailurePromise)
//        authAPI.getUserAPI = mockSignInAPI
 
//        authStore = new AuthStore(authAPI)
//        await authStore.userSignIn(requestObject)
 
//        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED)
//        expect(authStore.getUserSignInAPIError).toBe('error')
//     })
 
//     it('should test user sign-out', () => {
//        authStore.userSignOut()
//        expect(mockRemoveCookie).toBeCalled()
//        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL)
//        expect(authStore.getUserSignInAPIError).toBe(null)
//     })
//  })
