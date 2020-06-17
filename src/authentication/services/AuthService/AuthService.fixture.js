import { resolveWithTimeout } from '../../../Common/utils/TestUtils.js'

import userSignInResponse from '../../fixtures/userSignInResponse.json';

class AuthFixtureService {
   getUserAPI(requestObject) {
      return resolveWithTimeout(userSignInResponse)
   }
}

export default AuthFixtureService
