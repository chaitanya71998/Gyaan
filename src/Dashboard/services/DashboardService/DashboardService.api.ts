import { create, ApisauceInstance } from 'apisauce'

import { networkCallWithApisauceWithAccessToken } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants'

class DashboardAPIService {
   api:ApisauceInstance
   constructor() {
      this.api = create({
         baseURL: 'https://dcf9663914c2.ngrok.io/api/gyaan'
      })
   }
   domainTypesAPI(requestObject:object = {}) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `/domains/v1/?offset_parameter=${1}&limit_parameter=${3}`,
         requestObject,
         apiMethods.get
      )
   }

   getDomainRelatedTags(domainId: any) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `/domain/${domainId}/tags/v1/`,
         {},
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
   followingDomainsAPI(id: number) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `domains/${id}`,
         {},
         apiMethods.get
      )
   }

   domainDescriptionAPI(id: number) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `domain/${id}/v1/`,
         {},
         apiMethods.get
      )
   }

   domainPostsAPI(domainId: number) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `domain/${domainId}/posts/v1/?offset_parameter=${1}&limit_parameter=${8}`,
         {},
         apiMethods.get
      )
   }

   getPostReactionStatus(postId: number){
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `/entity/${postId}/react/v1/`,
         {},
         apiMethods.get
      )
   }
   getCommentReactionStatus(commentId: number){
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `/entity/${commentId}/react/v1/`,
         {},
         apiMethods.get
      )
   }

  
}

export default DashboardAPIService
