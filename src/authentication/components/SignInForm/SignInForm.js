import React,{Component} from 'react';
import {observer} from 'mobx-react';

// import  companyLogo  from "../../utils/assets/CompanyLogo/companyLogo.svg";
import  strings  from "../../i18n/strings.json";

import { InputElement } from "../../../components/common/InputElement";
import { SignInButton, SignUpText, SignUpLink, CompanyImage, SignInBlock, Label } from "./styledComponents";
@observer 
class SignInForm extends Component{
    render(){
    const {signUpLabel,loginIn,signUp} = strings;
        return (
        <SignInBlock>
        <CompanyImage src={companyLogo} alt={logo}/>
        <Label></Label>
        <Form>
            <label>{signUpLabel}</label>
            <InputElement type={"text"} value={"jhjh"}  isCorrect={isCorrect}/>
            <InputElement type={"password"}   />
            <SignInButton type={"button"}  >{loginIn}</SignInButton>
        </Form>
        <SignUpText><SignUpLink >{signUp}</SignUpLink></SignUpText>
        </SignInBlock>
        )
    }
}

export {SignInForm};