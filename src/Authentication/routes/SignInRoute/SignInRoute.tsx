import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import { observable } from 'mobx'
import { getAccessToken } from '../../../Common/utils/StorageUtils'

import { SignInForm } from '../../components/SignInForm'
import { paths } from '../../../Common/constants/NavigationConstants'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'
import { AuthStore } from '../../stores/AuthStore'
import {
   validatePassword,
   validateUsername
} from '../../../Common/utils/ValidationUtils'
import { InputWithErrorMessage } from '../../../Common/components/CustomInputElement'
const { dashboard } = paths

export interface SignInRouteProps {
   authStore: AuthStore
}
export interface UserLoginCredentials {
   username: string
   password: string
}
@inject('authStore')
@observer
class SignInRoute extends Component<SignInRouteProps> {
   @observable username: string
   @observable password: string
   @observable errorMessage: string
   @observable hasToken: boolean | any
   usernameRef: React.RefObject<InputWithErrorMessage>
   passwordRef: React.RefObject<InputWithErrorMessage>
   constructor(props: any) {
      super(props)
      this.username = ''
      this.password = ''
      this.errorMessage = ''
      this.usernameRef = React.createRef()
      this.passwordRef = React.createRef()
   }

   gotoHomeScreen() {
      return <Redirect to={dashboard} />
   }

   handleSignIn = async () => {
      const userLoginCredentials: UserLoginCredentials = {
         username: this.username,
         password: this.password
      }
      await this.props.authStore.userSignIn(userLoginCredentials)

      if (getAccessToken()) {
         this.hasToken = true
      } else {
         this.hasToken = false
         this.errorMessage = getUserDisplayableErrorMessage(
            this.props.authStore.getUserSignInAPIError
         )
      }
   }
   handleSubmit = (event: { preventDefault: () => void }) => {
      event.preventDefault()
      this.handleErrorMessage()
      this.usernameRef.current?.validateValue(this.username)
      this.passwordRef.current?.validateValue(this.password)
   }
   handlePasswordChange = (value: string) => {
      this.emptyErrorMessage()
      this.password = value
   }
   handleUsernameChange = (value: string) => {
      this.emptyErrorMessage()
      this.username = value
   }
   handleErrorMessage = () => {
      if (this.errorMessage === '' && this.didFormHasErrors()) {
         this.handleSignIn()
      }
   }
   didFormHasErrors = () => {
      return (
         this.usernameRef.current?.hasError === false &&
         this.passwordRef.current?.hasError === false
      )
   }
   emptyErrorMessage = () => {
      this.errorMessage = ''
   }

   render() {
      if (this.hasToken) {
         return this.gotoHomeScreen()
      }
      return (
         <SignInForm
            usernameRef={this.usernameRef}
            passwordRef={this.passwordRef}
            username={this.username}
            password={this.password}
            errorMessage={this.errorMessage}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleSubmit={this.handleSubmit}
            validatePassword={validatePassword}
            validateUsername={validateUsername}
         />
      )
   }
}

export { SignInRoute }
