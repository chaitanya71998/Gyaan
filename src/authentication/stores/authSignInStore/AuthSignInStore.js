import { action,observable } from "mobx";
import { textSpanIntersectsWithTextSpan } from "typescript";

class AuthSignInStore {
    @observable username
    @observable password
    constructor(){
        this.init();
    }
    @action.bound
    init(){
        this.password="";
        this.username = "";
    }
    constructor(authService){
        this.authAPIService = authService;
        this.init()
        
    }
    @action.bound
    userSignIn(){
            
        const usersPromise = this.authAPIService.signInAPI();
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
        .catch(this.setGetUserSignInAPIError);

    }
    @action.bound
    setUserSignInAPIResponse(response){
        this.token = response[0]['access_token'];
        setAccessToken(this.token)
    }
    @action.bound
    setGetUserSignInAPIError(error){
        this.getUserSignInAPIError=error;
    }
    @action.bound
    setGetUserSignInAPIStatus(apiStatus){
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


export  {AuthSignInStore};