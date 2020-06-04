import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../Common/utils/APIUtils.js'
import { apiMethods } from '../../../Common/constants/APIConstants'

class AuthAPIService {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://7969a15995b8.ngrok.io/api/gyaan'
      })
   }
   getUserAPI(requestObject) {
      console.log(requestObject)
      return networkCallWithApisauce(
         this.api,
         '/login/v1/',
         requestObject,
         apiMethods.get
      )
   }
}

export default AuthAPIService
