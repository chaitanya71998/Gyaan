import React, { Component } from 'react'
import { observer } from 'mobx-react'
import {
   PostProfile,
   PostProfileThumbnail,
   Header,
   AuthorAndPostTime
} from './styledComponents'
import {
   Typo14DarkBlueGreyHKGroteskSemiBold,
   Typo14SteelHKGroteskRegular
} from '../../../Common/style_guide/Typos'

@observer
class PostHeader extends Component {
   render() {
      const { profilePic, userName, dateAndTime, domainName } = this.props

      return (
         <Header>
            <PostProfile>
               <PostProfileThumbnail src={profilePic} alt={userName[0]} />
               <AuthorAndPostTime>
                  <Typo14DarkBlueGreyHKGroteskSemiBold>
                     {userName} .
                  </Typo14DarkBlueGreyHKGroteskSemiBold>
                  <Typo14SteelHKGroteskRegular>
                     . {dateAndTime}
                  </Typo14SteelHKGroteskRegular>
               </AuthorAndPostTime>
            </PostProfile>
            <Typo14DarkBlueGreyHKGroteskSemiBold>
               {domainName}
            </Typo14DarkBlueGreyHKGroteskSemiBold>
         </Header>
      )
   }
}

export { PostHeader }
