import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import { observable } from 'mobx'
import { getAccessToken } from '../../../Common/utils/StorageUtils'

import { SignInForm } from '../../components/SignInForm'
import { paths } from '../../../Common/constants/NavigationConstants'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'
import { AuthStore } from "../../stores/AuthStore"
import { validatePassword } from "../../../Common/utils/ValidationUtils"
const { dashboard } = paths


export interface SignInRouteProps {
   authStore:AuthStore
}
export interface UserLoginCredentials{
   username:string
   password:string
}
@inject('authStore')
@observer
class SignInRoute extends Component<SignInRouteProps>{
   @observable username: string
   @observable password: string
   @observable errorMessage: string
   @observable hasToken: boolean|any

   constructor(props:any) {
      super(props)
      this.username = ''
      this.password = ''
      this.errorMessage = ''

   }

   gotoHomeScreen() {
      return <Redirect to={dashboard} />
   }

   handleSignIn = async () => {
      const userLoginCredentials:UserLoginCredentials = {
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
      // this.handleErrorMessage()
   }
   handlePasswordChange = (event: { target: { value: string } }) => {
      this.emptyErrorMessage()
      this.password = event.target.value
   }
   handleUsernameChange = (event: { target: { value: string } }) => {
      this.emptyErrorMessage()
      this.username = event.target.value
   }
   handleErrorMessage = () => {
      if (this.username !== '' && this.password !== '') {
         this.handleSignIn()
      } else if (this.username === '' && this.password === '') {
         this.errorMessage = 'Please enter username and password'
      } else if (this.username !== '' && this.password === '') {
         this.errorMessage = 'Please enter password'
      } else if (this.username === '' && this.password !== '') {
         this.errorMessage = 'Please enter username '
      } else {
         this.emptyErrorMessage()
      }
   }
   emptyErrorMessage = () => {
      this.errorMessage = ''
   }
   getPassword=(event)=>{
      const value = (event.target.value);
     this.errorMessage =  validatePassword(value).errorMessage
      
   }

   render() {
      if (this.hasToken) {
         return this.gotoHomeScreen()
      }
      return (
         <SignInForm
            username={this.username}
            password={this.password}
            errorMessage={this.errorMessage}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleSubmit={this.handleSubmit}
            validatePassword={this.getPassword}
         />
      )
   }
}

export { SignInRoute }
