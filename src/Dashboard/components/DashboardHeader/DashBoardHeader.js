import { observable } from 'mobx'
import { Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import { paths } from '../../../Common/constants/NavigationConstants'

import strings from '../../i18n/strings.json'

import {
   Thumbnail,
   ButtonText,
   CreatePostButton,
   HeaderBlock,
   Div,
   SearchInput
} from './styledComponents'
import { SecondaryButton } from '../../../Common/components/ButtonElement/styledComponents'

const { createPostPath, signInForm } = paths

const { writePost, profile } = strings

@inject('authStore')
@observer
class DashboardHeader extends Component {
   @observable redirectToCreatePostPage
   @observable isClickedSignOut

   constructor(props) {
      super(props)
      this.isClickedSignOut = false
      this.redirectToCreatePostPage = false
   }

   onClickSignOut = event => {
      const { authStore } = this.props
      authStore.userSignOut()
      this.isClickedSignOut = true
   }
   navigateToCreatePost = event => {
      this.redirectToCreatePostPage = true
   }
   render() {
      if (this.isClickedSignOut) {
         return <Redirect to={signInForm} />
      }
      if (this.redirectToCreatePostPage) {
         return <Redirect to={createPostPath} />
      } else {
         return (
            <HeaderBlock>
               <SearchInput placeholder='Search' />
               <Div>
                  <CreatePostButton>
                     <ButtonText onClick={this.navigateToCreatePost}>
                        {writePost}
                     </ButtonText>
                  </CreatePostButton>
                  <Div>
                     <SecondaryButton onClick={this.onClickSignOut}>
                        SignOut
                     </SecondaryButton>
                  </Div>
                  <Thumbnail
                     src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/3ad47eab-2937-4eb2-ab70-9bc8cb0fea76@3x.png'
                     alt={profile}
                  />
               </Div>
            </HeaderBlock>
         )
      }
   }
}

export { DashboardHeader }
