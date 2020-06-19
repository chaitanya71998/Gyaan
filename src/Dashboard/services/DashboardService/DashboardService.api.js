import { create } from 'apisauce'

import { networkCallWithApisauceWithAccessToken } from '../../../Common/utils/APIUtils'
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
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `/domains/v1/?offset_parameter=${1}&limit_parameter=${3}`,
         requestObject,
         apiMethods.get
      )
   }

   getDomainRelatedTags(domainId) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `/domain/${domainId}/tags/v1/`,
         requestObject,
         apiMethods.get
      )
   }

   getAllDomainsPostsAPI() {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `/posts/v1/?offset_parameter=${1}&limit_parameter=${3}`,
         {},
         apiMethods.get
      )
   }
   followingDomainsAPI(id, requestObject) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `domains/${id}`,
         {},
         apiMethods.get
      )
   }

   domainDescriptionAPI(id, requestObject = {}) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `domain/${id}/v1/`,
         requestObject,
         apiMethods.get
      )
   }

   domainPostsAPI(domainId) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `domain/${domainId}/posts/v1/?offset_parameter=${1}&limit_parameter=${8}`,
         {},
         apiMethods.get
      )
   }

   getPostReactionStatus(postId){
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `/entity/${id}/react/v1/`,
         requestObject,
         apiMethods.get
      )
   }
   getCommentReactionStatus(commentId){
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `/entity/${id}/react/v1/`,
         requestObject,
         apiMethods.get
      )
   }

  
}

export default DashboardAPIService
