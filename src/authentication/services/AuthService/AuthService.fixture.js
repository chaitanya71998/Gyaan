import {create} from   'apisauce';

import { networkCallWithApisauce } from '../../../Common/utils/APIUtils.js'
import { apiMethods } from '../../../Common/constants/APIConstants';
import { resolveWithTimeout } from "../../../Common/utils/TestUtils.js";

import userSignInResponse from "../../fixtures/userSignInResponse.json";


class AuthFixtureService{
    api
    constructor(){
        this.api = create({
            baseURL: '127.0.0.1:8080/api/gyaan/',
        })
    }
    getUserAPI(requestObject){
        return resolveWithTimeout(userSignInResponse)
    }
    
}

export default AuthFixtureService;