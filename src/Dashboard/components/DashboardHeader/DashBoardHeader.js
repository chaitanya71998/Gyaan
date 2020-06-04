import React, { Component } from 'react'
import { observer } from 'mobx-react'
import strings from '../../i18n/strings.json'
import {
   Thumbnail,
   ButtonText,
   CreatePostButton,
   HeaderBlock,
   Div,
   SearchInput
} from './styledComponents'

const { writePost, profile } = strings
@observer
class DashboardHeader extends Component {
   render() {
      return (
         <HeaderBlock>
            <SearchInput placeholder='Search' />
            <Div>
               <CreatePostButton>
                  <ButtonText>{writePost}</ButtonText>
               </CreatePostButton>
               <Thumbnail
                  src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/3ad47eab-2937-4eb2-ab70-9bc8cb0fea76@3x.png'
                  alt={profile}
               />
            </Div>
         </HeaderBlock>
      )
   }
}

export { DashboardHeader }
