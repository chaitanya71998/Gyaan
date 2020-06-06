import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants'

class DashboardAPIService {
   api
   endpoint
   constructor() {
      this.api = create({
         baseURL: 'https://dcf9663914c2.ngrok.io/api/gyaan'
      })
   }
   domainTypesAPI(requestObject = {}) {
      return networkCallWithApisauce(
         this.api,
         `/domains/v1/?offset_parameter=${1}&limit_parameter=${3}`,
         requestObject,
         apiMethods.get
      )
   }

   getDomainRelatedTags(domainId){
      return networkCallWithApisauce(
         this.api,
         `/domain/${domainId}/tags/v1/`,
         requestObject,
         apiMethods.get
      )
   }

   allDomainsPostsAPI() {
      return networkCallWithApisauce(
         this.api,
         `/posts/v1/?offset_parameter=${1}&limit_parameter=${3}`,
         {},
         apiMethods.get
      )
   }
   followingDomainsAPI(id, requestObject) {
      return networkCallWithApisauce(
         this.api,
         `domains/${id}`,
         {},
         apiMethods.get
      )
   }
   
   domainDescriptionAPI(id, requestObject = {}) {
      return networkCallWithApisauce(
         this.api,
         `domain/${id}/v1/`,
         requestObject,
         apiMethods.get
      )
   }

   domainPostsAPI(domainId) {
      return networkCallWithApisauce(
         this.api,
         `domain/${domainId}/posts/v1/?offset_parameter=${1}&limit_parameter=${8}`,
         {},
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
   userReactionAPI(id,requestObject) {
      return networkCallWithApisauce(
         this.api,
         `/entity/${id}/react/v1/`,
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
