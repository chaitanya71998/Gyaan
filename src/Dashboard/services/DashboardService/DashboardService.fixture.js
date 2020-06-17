import { create } from 'apisauce'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import domainTypes from '../../fixtures/domainTypes.json'
import postsList from '../../fixtures/postsList.json'
import domainDescription from '../../fixtures/domainDescription.json'
import tagsFixtures from '../../fixtures/tagsFixtures.json'
import { API_SUCCESS, API_FAILED } from "@ib/api-constants"
class DashboardFixtureService {
   domainTypesAPI() {
      return resolveWithTimeout(domainTypes)
   }
   getDomainRelatedTags(domainId) {
      return resolveWithTimeout(tagsFixtures)
   }

   getAllDomainsPostsAPI () {
      return resolveWithTimeout(postsList)
   }
   followingDomainsAPI() {
      return resolveWithTimeout()
   }
   domainDescriptionAPI() {
      return resolveWithTimeout(domainDescription)
   }
   domainPostsAPI() {
      return resolveWithTimeout(postsList)
   }
  
 
   getPostReactionStatus(postId){
      return resolveWithTimeout(API_SUCCESS);

   }
   getCommentReactionStatus(commentId){
      return resolveWithTimeout(API_SUCCESS);
   }
   
}

export default DashboardFixtureService
