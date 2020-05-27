import React,{ Component } from "react";
import { observer,inject } from "mobx-react";
import { Redirect } from "react-router-dom";
import { observable } from "mobx";
import { getAccessToken } from "../../../utils/StorageUtils"

import  strings  from "../../i18n/strings.json";
import { SignInForm } from "../../components/SignInForm";
import {paths} from "../../../constants/paths";

const {incorrectMessage} = strings;
const {homeScreen} = paths;


@inject("authSignInStore")
@observer
class SignInRoute extends Component{
    @observable username;
    @observable password;
    @observable errorMessage;
    @observable hasToken;
    
    constructor(props){
        super(props)
        this.username ='';
        this.password='';
        this.errorMessage='';
        this.hasToken = false;
    } 

    gotoHomeScreen(){
        return (
              <Redirect
              to={
                {
                  pathname:"/home-screen",
                }
              }/>)
      }
    
    handleSignIn=async()=>{
   
        /*await this.props.authSignInStore.userSignIn();
        if(getAccessToken()){
            this.hasToken=true;    
        }
        else{
            this.hasToken=false;
            this.errorMessage=incorrectMessage;
        } */
        console.log("signInClicked"); 
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.username='';
        this.password='';
    }
    handlePasswordChange=(event)=>{
        this.emptyErrorMessage();
        this.password=event.target.value
        console.log(event.target.value)
    }
    handleusernameChange=(event)=>{
        this.emptyErrorMessage();
        this.username = event.target.value;
        console.log(event.target.value)
    }
    
    getAPIStatus=()=>{
        const {
            authStore: { getUserSignInAPIStatus }
          } = this.props;
          return getUserSignInAPIStatus
    }
    emptyErrorMessage=()=>{
        this.errorMessage='';
    }

    render(){
        console.log(this.hasToken)
        if(this.hasToken){
            return(this.gotoProductsPage())
        }
        return( <SignInForm
            username={this.username}
            handleusernameChange={this.handleusernameChange}
            password = {this.password}
            handlePasswordChange = {this.handlePasswordChange}
            errorMessage = {this.errorMessage}
            handleSubmit={this.handleSubmit}
            />
       )}
}

export { SignInRoute };