import {create} from   'apisauce';

import { networkCallWithApisauce } from '../../../utils/APIUtils.js'
import { apiMethods } from '../../../constants/APIConstants';

class AuthService{
    api
    constructor(){
        this.api = create({
            baseURL: 'loaclhost:8080/Gyaan/',
        })
    }
    getUserAPI(endpoint,requestObject){
        return networkCallWithApisauce(
            this.api,
            endpoint,
            requestObject,
            apiMethods.get
            );
    }
    
}

export default AuthService;