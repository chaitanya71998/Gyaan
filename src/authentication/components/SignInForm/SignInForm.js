import React,{Component} from 'react';
import {observer} from 'mobx-react';

import  strings  from "../../i18n/strings.json";

import { InputElement } from "../../../components/common/InputElement";
import { Typo32DarkBlueGreyRubikRegular, Typo12NeonRedHKGroteskRegular, Typo12SteelHKGroteskSemiBold } from "../../../style_guide/Typos";

import { SignInButton, SignUpText, SignUpLink,Form, SignInBlock } from "./styledComponents";
import { ImageElement } from "../../../components/common/ImageElement";

const inputElementCustomStyles={margin:"24px 0px 8px 0px"}

@observer 
class SignInForm extends Component{
    render(){

    const {username,
    password,
    errorMessage,
    handleusernameChange,
    handlePasswordChange,
    handleSubmit,
    apiStatus}=this.props;


    const {iBhubs,hiThere,pleaseSignUp,loginIn,usernameLabel,passwordLabel,signUp,incorrectMessage,dontHaveAnAccount} = strings;
    const isCorrect = false;
        return (
        <SignInBlock>
            
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
                    onChage={handleusernameChange} 
                    style={inputElementCustomStyles}  
                    isCorrect={isCorrect}/>
                
                <Typo12NeonRedHKGroteskRegular>{isCorrect?incorrectMessage:""}</Typo12NeonRedHKGroteskRegular>
                <Typo12SteelHKGroteskSemiBold>{passwordLabel}</Typo12SteelHKGroteskSemiBold>
                
                <InputElement  
                    type={"password"} 
                    value={password}
                    onChange={handlePasswordChange}
                    style={inputElementCustomStyles}/>
                <SignInButton type={"button"} onClick={handleSubmit} >{loginIn}</SignInButton>
            </Form>
            <SignUpText>{dontHaveAnAccount}<SignUpLink >{signUp}</SignUpLink></SignUpText>
        </SignInBlock>
        )
    }
}

export {SignInForm};