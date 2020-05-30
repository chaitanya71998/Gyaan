import {create} from   'apisauce';

import { networkCallWithApisauce } from '../../../utils/APIUtils.js'
import { apiMethods } from '../../../constants/APIConstants';

class AuthService{
    api
    constructor(){
        this.api = create({
            baseURL: '127.0.0.1:8080/api/gyaan/',
        })
    }
    getUserAPI(requestObject){
        return networkCallWithApisauce(
            this.api,
            "login/v1/",
            requestObject,
            apiMethods.get
            );
    }
    
}

export default AuthService;