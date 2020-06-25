import { create } from 'apisauce'
import { API_SUCCESS, API_FAILED } from "@ib/api-constants"

import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import domainTypes from '../../fixtures/domainTypes.json'
import postsList from '../../fixtures/postsList.json'
import domainDescription from '../../fixtures/domainDescription.json'
import tagsFixtures from '../../fixtures/tagsFixtures.json'

import { DashboardService } from "."

class DashboardFixtureService implements DashboardService{
   domainTypesAPI() {
      return resolveWithTimeout(domainTypes)
   }
   getDomainRelatedTags(domainId:number) {
      return resolveWithTimeout(tagsFixtures)
   }

   getAllDomainsPostsAPI () {
      return resolveWithTimeout(postsList)
   }
  
   domainDescriptionAPI(domainId:number) {
      return resolveWithTimeout(domainDescription)
   }
   domainPostsAPI(domainId:number) {
      return resolveWithTimeout(postsList)
   }
  
 
   getPostReactionStatus(postId:number){
      return resolveWithTimeout(API_SUCCESS);

   }
   getCommentReactionStatus(commentId:number){
      return resolveWithTimeout(API_SUCCESS);
   }
   
}

export default DashboardFixtureService
