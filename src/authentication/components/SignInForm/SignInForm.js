import React,{Component} from 'react';
import {observer} from 'mobx-react';

import  strings  from "../../i18n/strings.json";

import { InputElement } from "../../../components/common/InputElement";
import { Typo32DarkBlueGreyRubikRegular, Typo12SteelHKGroteskSemiBold } from "../../../style_guide/Typos";

import { SignInButton, SignUpText, SignUpLink, CompanyImage, SignInBlock, Label } from "./styledComponents";

@observer 
class SignInForm extends Component{
    render(){
    const {signInLabel,loginIn,logo,username,password,signUp,dontHaveAnAccount} = strings;
    const isCorrect = false
        return (
        <SignInBlock>
        <CompanyImage src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/d1119fe1-4f3a-40fd-860b-3adee7ca7915.svg" alt={logo}/>
        <Typo32DarkBlueGreyRubikRegular>{signInLabel}</Typo32DarkBlueGreyRubikRegular>
        <form>
            <Typo12SteelHKGroteskSemiBold>{username}</Typo12SteelHKGroteskSemiBold>
            <br/>
            <InputElement type={"text"}   isCorrect={isCorrect}/>
            <br/>
            <Typo12SteelHKGroteskSemiBold>{password}</Typo12SteelHKGroteskSemiBold>
            <br/>
            <InputElement type={"password"}   />
            <br/>
            <SignInButton type={"button"}  >{loginIn}</SignInButton>
        </form>
        <SignUpText>{dontHaveAnAccount}<SignUpLink >{signUp}</SignUpLink></SignUpText>
        </SignInBlock>
        )
    }
}

export {SignInForm};