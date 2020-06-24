import React, { Component } from 'react'
import { observer } from 'mobx-react'

import strings from '../../i18n/strings.json'

import { InputElement } from '../../../Common/components/InputElement'
import {
   Typo32DarkBlueGreyRubikRegular,
   Typo12NeonRedHKGroteskRegular,
   Typo12SteelHKGroteskSemiBold
} from '../../../Common/style_guide/Typos'

import {
   SignInButton,
   SignUpText,
   Div,
   SignUpLink,
   Form,
   SignInBlock
} from './styledComponents'
import { ImageElement } from '../../../Common/components/ImageElement'

const {
   iBhubs,
   hiThere,
   login,
   Login,
   usernameLabel,
   passwordLabel,
   signUp,
   dontHaveAnAccount
} = strings;

interface SignInFormProps{
   username:string
   password:string
   errorMessage:string
   handleUsernameChange:any
   handlePasswordChange:any
   handleSubmit:any
   
}

@observer
class SignInForm extends Component <SignInFormProps>{
   render() {
      const {
         username,
         password,
         errorMessage,
         handleUsernameChange,
         handlePasswordChange,
         handleSubmit
      } = this.props

      return (
         <SignInBlock>
            <Div>
               <ImageElement
                  src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/d1119fe1-4f3a-40fd-860b-3adee7ca7915.svg'
                  alt={iBhubs}
               />

               <Typo32DarkBlueGreyRubikRegular>
                  {hiThere}
                  <br />
                  {login}
               </Typo32DarkBlueGreyRubikRegular>

               <Form>
                  <Typo12SteelHKGroteskSemiBold>
                     {usernameLabel}
                  </Typo12SteelHKGroteskSemiBold>
                  <InputElement
                     type={'text'}
                     value={username}
                     onChange={handleUsernameChange}
                     isCorrect={errorMessage.includes('username')}
                  />

                  <Typo12SteelHKGroteskSemiBold>
                     {passwordLabel}
                  </Typo12SteelHKGroteskSemiBold>

                  <InputElement
                     type={'password'}
                     value={password}
                     onChange={handlePasswordChange}
                     isCorrect={errorMessage.includes('password')}
                  />
                  <SignInButton type={'button'} onClick={handleSubmit}>
                     {Login}
                  </SignInButton>
                  <Typo12NeonRedHKGroteskRegular>
                     {errorMessage}
                  </Typo12NeonRedHKGroteskRegular>
               </Form>
               <SignUpText>
                  {dontHaveAnAccount}
                  <SignUpLink>{signUp}</SignUpLink>
               </SignUpText>
            </Div>
         </SignInBlock>
      )
   }
}

export { SignInForm }
