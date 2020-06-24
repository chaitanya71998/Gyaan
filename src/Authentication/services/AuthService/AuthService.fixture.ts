import { resolveWithTimeout } from '../../../Common/utils/TestUtils.js'

import userSignInResponse from '../../fixtures/userSignInResponse.json';
import { UserLoginCredentials } from "../../routes/SignInRoute/SignInRoute.jsx";

export interface AccessToken {
   access_token:string
}
class AuthFixtureService {
   getUserAPI(requestObject:UserLoginCredentials) {
      return resolveWithTimeout(userSignInResponse)
   }
}

export default AuthFixtureService
