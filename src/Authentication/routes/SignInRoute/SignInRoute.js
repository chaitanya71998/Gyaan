import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import { observable } from 'mobx'
import { getAccessToken } from '../../../Common/utils/StorageUtils'

import { SignInForm } from '../../components/SignInForm'
import { paths } from '../../../Common/constants/NavigationConstants'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'
const { dashboard } = paths

@inject('authStore')
@observer
class SignInRoute extends Component {
   @observable username
   @observable password
   @observable errorMessage
   @observable hasToken

   constructor(props) {
      super(props)
      this.username = ''
      this.password = ''
      this.errorMessage = ''
   }

   gotoHomeScreen() {
      return <Redirect to={dashboard} />
   }

   handleSignIn = async () => {
      const userCredenditals = {
         username: this.username,
         password: this.password
      }
      await this.props.authStore.userSignIn(userCredenditals)

      if (getAccessToken()) {
         this.hasToken = true
      } else {
         this.hasToken = false
         this.errorMessage = getUserDisplayableErrorMessage(
            this.props.authStore.getUserSignInAPIError
         )
      }
   }
   handleSubmit = event => {
      event.preventDefault()
      this.handleErrorMessage()
   }
   handlePasswordChange = event => {
      this.emptyErrorMessage()
      this.password = event.target.value
   }
   handleusernameChange = event => {
      this.emptyErrorMessage()
      this.username = event.target.value
   }
   handleErrorMessage = () => {
      if (this.username !== '' && this.password !== '') {
         this.handleSignIn()
      } else if (this.username === '' && this.password === '') {
         this.errorMessage = 'Please enter username'
      } else if (this.username !== '' && this.password === '') {
         this.errorMessage = 'Please enter password'
      } else if (this.username === '' && this.password !== '') {
         this.errorMessage = 'Please enter username'
      } else {
         this.emptyErrorMessage()
      }
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
            username={this.username}
            password={this.password}
            errorMessage={this.errorMessage}
            handleusernameChange={this.handleusernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleSubmit={this.handleSubmit}
         />
      )
   }
}

export { SignInRoute }
