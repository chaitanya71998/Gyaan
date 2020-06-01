import React,{Component} from 'react';
import {observer} from 'mobx-react';

import  strings  from "../../i18n/strings.json";

import { InputElement } from "../../../Common/components/InputElement";
import { Typo32DarkBlueGreyRubikRegular, Typo12NeonRedHKGroteskRegular, Typo12SteelHKGroteskSemiBold } from "../../../Common/style_guide/Typos";

import { SignInButton, SignUpText, Div,SignUpLink,Form, SignInBlock } from "./styledComponents";
import { ImageElement } from "../../../Common/components/ImageElement";


const {
    iBhubs,
    hiThere,
    pleaseSignUp,
    loginIn,
    usernameLabel,
    passwordLabel,
    signUp,
    dontHaveAnAccount} = strings;


@observer 
class SignInForm extends Component{
    render(){
    const {
    username,
    password,
    errorMessage,
    handleusernameChange,
    handlePasswordChange,
    handleSubmit}=this.props;

    const isNotCorrectUser = errorMessage?true:false;
        return (
        
        <SignInBlock>
            <Div>
                <ImageElement 
                    src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/d1119fe1-4f3a-40fd-860b-3adee7ca7915.svg" 
                    alt={iBhubs}/>
                
                <Typo32DarkBlueGreyRubikRegular>
                    {hiThere}<br/>{pleaseSignUp}  
                </Typo32DarkBlueGreyRubikRegular>
                
                <Form>
                    <Typo12SteelHKGroteskSemiBold  >{usernameLabel}</Typo12SteelHKGroteskSemiBold>
                    <InputElement 
                        type={"text"}  
                        value={username} 
                        onChange={handleusernameChange} 
                        isCorrect={isNotCorrectUser}/>
                    
                    <Typo12NeonRedHKGroteskRegular>{errorMessage}</Typo12NeonRedHKGroteskRegular>
                    <Typo12SteelHKGroteskSemiBold>{passwordLabel}</Typo12SteelHKGroteskSemiBold>
                    
                    <InputElement  
                        type={"password"} 
                        value={password}
                        onChange={handlePasswordChange}/>
                    <SignInButton type={"button"} onClick={handleSubmit} >{loginIn}</SignInButton>
                </Form>
                <SignUpText>{dontHaveAnAccount}<SignUpLink >{signUp}</SignUpLink></SignUpText>
            </Div>
        </SignInBlock>
        )
    }
}

export {SignInForm};