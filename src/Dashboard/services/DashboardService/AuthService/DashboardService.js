import {create} from   'apisauce';

import { networkCallWithApisauce } from '../../../../utils/APIUtils'
import { apiMethods } from '../../../../constants/APIConstants';

class DashboardService{
    api
    constructor(){
        this.api = create({
            baseURL: '127.0.0.1:8080/api/gyaan/',
        })
    }
    getAPI(endPoint){
        return networkCallWithApisauce(
            this.api,
            endPoint,
            {},
            apiMethods.get
            );
    }
    
}

export default DashboardService;