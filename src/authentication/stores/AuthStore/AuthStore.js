import { observable,action } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import { setAccessToken, clearUserSession, } from '../../../Common/utils/StorageUtils';


class AuthStore {
    @observable getUserSignInAPIStatus 
    @observable getUserSignInAPIError 
    @observable token
    
    constructor(authService){
        this.authAPIService = authService;
        this.init()     
    }

    @action.bound
    userSignIn(requestObj){     
        const usersPromise = this.authAPIService.getUserAPI(requestObj);
        console.log(usersPromise)
        // return bindPromiseWithOnSuccess(usersPromise)
        // .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
        // .catch(this.setGetUserSignInAPIError);

    }
    @action.bound
    setUserSignInAPIResponse(response){
        setAccessToken(response.access_token);
    }
    @action.bound
    setUserSignInAPIError(error){
        this.getUserSignInAPIError=error;
    }
    @action.bound
    setUserSignInAPIStatus(apiStatus){
        this.getUserSignInAPIStatus=apiStatus;
    }
    @action.bound
    userSignOut(){      
       clearUserSession();
       this.clearStore();
    }
    @action.bound
    init(){
        this.getUserSignInAPIStatus = API_INITIAL;
        this.getUserSignInAPIError = null;
        this.token='';
    }
    @action.bound
    clearStore(){
        this.init();
    }
   
}


export  { AuthStore };