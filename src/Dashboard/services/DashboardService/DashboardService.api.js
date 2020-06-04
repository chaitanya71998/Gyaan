import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants'

class DashboardAPIService {
   api
   endpoint
   constructor() {
      this.api = create({
         baseURL: 'https://7969a15995b8.ngrok.io/127.0.0.1:8080/api/gyaan/'
      })
   }
   domainTypesAPI(requestObject={}) {
      return networkCallWithApisauce(
         this.api,
         `domains/v1/?offset_parameter=${1}&limit_parameter=${8}`,
         requestObject,
         apiMethods.get
      )
   }
   allDomainsPostsAPI(requestObject={}) {
      return networkCallWithApisauce(
         this.api,
         `posts/v1/?offset_parameter=${1}&limit_parameter=${8}`,
         requestObject,
         apiMethods.get
      )
   }
   followingDomainsAPI(id, requestObject) {
      return networkCallWithApisauce(
         this.api,
         'domains/id',
         requestObject,
         apiMethods.get
      )
   }
   domainDescriptionAPI(id, requestObject={}) {
      return networkCallWithApisauce(
         this.api,
         `domain/${id}/v1/`,
         requestObject,
         apiMethods.get
      )
   }
   domainPostsAPI(domainId, requestObject) {
      return networkCallWithApisauce(
         this.api,
         `domain/${domainId}/posts/v1/?offset_parameter=${1}&limit_parameter=${8}`,
         requestObject,
         apiMethods.get
      )
   }
   createCommentPostAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         '',
         requestObject,
         apiMethods.get
      )
   }
   createCommentCreationAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         '',
         requestObject,
         apiMethods.get
      )
   }
   userReactionAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         '',
         requestObject,
         apiMethods.get
      )
   }
   postAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         '',
         requestObject,
         apiMethods.get
      )
   }
}

export default DashboardAPIService
