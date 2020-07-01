import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { InputElement } from '../../../Common/components/InputElement'
import {
   Typo32DarkBlueGreyRubikRegular,
   Typo12SteelHKGroteskSemiBold
} from '../../../Common/style_guide/Typos'

import strings from '../../i18n/strings.json'

import {
   SignInButton,
   SignUpText,
   Div,
   SignUpLink,
   Form,
   SignInBlock,
   ErrorMessage
} from './styledComponents'
import { ImageElement } from '../../../Common/components/ImageElement'
import { InputWithErrorMessage } from '../../../Common/components/CustomInputElement'

const {
   iBhubs,
   hiThere,
   login,
   Login,
   usernameLabel,
   passwordLabel,
   signUp,
   dontHaveAnAccount
} = strings

interface SignInFormProps {
   username: string
   password: string
   errorMessage: string
   handleUsernameChange: any
   handlePasswordChange: any
   handleSubmit: any
   validatePassword: any
   validateUsername: any
   usernameRef: any
   passwordRef: any
}

@observer
class SignInForm extends Component<SignInFormProps> {
   render() {
      const {
         username,
         password,
         errorMessage,
         handleUsernameChange,
         handlePasswordChange,
         handleSubmit,
         validatePassword,
         validateUsername,
         usernameRef,
         passwordRef
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
                  <InputWithErrorMessage
                     ref={usernameRef}
                     value={username}
                     type={'text'}
                     required={true}
                     onChange={handleUsernameChange}
                     validatingFunction={validateUsername}
                     placeholder='Username'
                  />

                  <Typo12SteelHKGroteskSemiBold>
                     {passwordLabel}
                  </Typo12SteelHKGroteskSemiBold>

                  <InputWithErrorMessage
                     ref={passwordRef}
                     value={password}
                     type={'password'}
                     required={true}
                     onChange={handlePasswordChange}
                     validatingFunction={validatePassword}
                     placeholder='Password'
                  />
                  <SignInButton type={'button'} onClick={handleSubmit}>
                     {Login}
                  </SignInButton>

                  <ErrorMessage>{errorMessage}</ErrorMessage>
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
