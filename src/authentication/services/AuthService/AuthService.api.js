import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../Common/utils/APIUtils.js'
import { apiMethods } from '../../../Common/constants/APIConstants'

class AuthAPIService {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://dcf9663914c2.ngrok.io/api/gyaan'
      })
   }
   getUserAPI(requestObject) {  
      return networkCallWithApisauce(
         this.api,
         '/login/v1/',
         requestObject,
         apiMethods.post
      )
   }
}

export default AuthAPIService
