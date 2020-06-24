import { create, ApisauceInstance } from 'apisauce'

import { networkCallWithApisauce } from '../../../Common/utils/APIUtils.js'

import { UserLoginCredentials } from "../../routes/SignInRoute/SignInRoute.jsx"
import { apiMethods } from '../../../Common/constants/APIConstants'



class AuthAPIService {
   api:ApisauceInstance
   constructor() {
      this.api = create({
         baseURL: 'https://dcf9663914c2.ngrok.io/api/gyaan'
      })
   }
   getUserAPI(requestObject:UserLoginCredentials) {
      return networkCallWithApisauce(
         this.api,
         '/login/v1/',
         requestObject,
         apiMethods.post
      )
   }
}

export default AuthAPIService
