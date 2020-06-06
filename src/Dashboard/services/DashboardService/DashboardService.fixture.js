import { create } from 'apisauce'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import domainTypes from '../../fixtures/domainTypes.json'
import postsList from '../../fixtures/postsList.json'
import domainDescription from '../../fixtures/domainDescription.json'
import tagsFixtures from "../../fixtures/tagsFixtures.json";
class DashboardFixtureService {
   domainTypesAPI() {
      return resolveWithTimeout(domainTypes)
   }
   getDomainRelatedTags(domainId){
      return resolveWithTimeout(tagsFixtures)
   }

   allDomainsPostsAPI() {
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
   createCommentPostAPI(requestObject) {
      return resolveWithTimeout((postId = 0))
   }
   createCommentCreationAPI(requestObject) {
      return resolveWithTimeout((commentId = 0))
   }
   userReactionAPI(requestObject) {
      return resolveWithTimeout({})
   }
   domainPostAPI(requestObject) {
      return resolveWithTimeout(postsList[0])
   }
}

export default DashboardFixtureService
