import {create} from   'apisauce';

import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants';


class DashboardAPIService{
    api;
    endpoint;
    constructor(){
        this.api = create({
            baseURL: '127.0.0.1:8080/api/gyaan/',
        });
       
    }
    domainTypesAPI(requestObject){
        return networkCallWithApisauce(
            this.api,
            "",
            requestObject,
            apiMethods.get
            );
    }
    allDomainsPostsAPI(requestObject){
        return networkCallWithApisauce(
            this.api,
            "",
            requestObject,
            apiMethods.get
            );
    }
    followingDomainsAPI(id,requestObject){
        return networkCallWithApisauce(
            this.api,
            "",
            requestObject,
            apiMethods.get
            );
    }
    domainDescriptionAPI(id,requestObject){
        return networkCallWithApisauce(
            this.api,
            "",
            requestObject,
            apiMethods.get
            ); 
    }
    domainPostsAPI(id,requestObject){
        return networkCallWithApisauce(
            this.api,
            "",
            requestObject,
            apiMethods.get
            );
    }
    createCommentPostAPI(requestObject){
        return networkCallWithApisauce(
            this.api,
            "",
            requestObject,
            apiMethods.get
            );
    }
    createCommentCreationAPI(requestObject){
        return networkCallWithApisauce(
            this.api,
            "",
            requestObject,
            apiMethods.get
            );
    }
    userReactionAPI(requestObject){
        return networkCallWithApisauce(
            this.api,
            "",
            requestObject,
            apiMethods.get
            );
    }
    postAPI(requestObject){
        return networkCallWithApisauce(
            this.api,
            "",
            requestObject,
            apiMethods.get
            );
    }
    
}

export default DashboardAPIService;