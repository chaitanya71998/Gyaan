import React, { Component } from 'react'
import { observer } from 'mobx-react'

import {
   Typo24DarkBlueGreyHKGroteskBold,
   Typo12SteelHKGroteskSemiBold,
   Typo18DarkBlueGreyHKGroteskMedium,
   Typo18WhiteHKGroteskRegular,
   Typo14DarkBlueGreyHKGroteskRegular,
   Type14NeonRedHKGroteskSemiBold
} from '../../../Common/style_guide/Typos'
import {
   SmallThumbnail,
   LargeThumbnail
} from '../../../Common/components/Thumbnail/styledComponents'

import strings from '../../i18n/strings.json'
import { DomainStats } from '../DomainStats'
import {
   DomainDescriptionBlock,
   DomainNameAndExperts,
   DomainExpertsList,
   DomainLogoAndName,
   DomainExperts,
   Description,
   DomainLogo,
   DomainStatsAndLeaveButton
} from './styledComponent'
import { SecondaryButton } from '../../../Common/components/ButtonElement/styledComponents'

const { domainExperts, leave } = strings
const LeaveText = (
   <Type14NeonRedHKGroteskSemiBold>{leave}</Type14NeonRedHKGroteskSemiBold>
)

@observer
class DomainDescription extends Component {
   displayDomainExperts = () => {
      const { domainExpertsList } = this.props
      const noOfExpertsToShow = 3
      return domainExpertsList.slice(0, noOfExpertsToShow).map(expert => {
         const { profilePic, name, userId } = expert
         return <SmallThumbnail key={userId} src={profilePic} alt={name[0]} />
      })
   }
   render() {
      const {
         domainName,
         domainDescription,
         domainFollowers,
         domainPosts,
         domainStars
      } = this.props
      return (
         <DomainDescriptionBlock>
            <DomainNameAndExperts>
               <DomainLogoAndName>
                  <DomainLogo>
                     <Typo18DarkBlueGreyHKGroteskMedium>
                        {domainName[2].toUpperCase()}
                     </Typo18DarkBlueGreyHKGroteskMedium>
                  </DomainLogo>
                  <Typo24DarkBlueGreyHKGroteskBold>
                     {domainName}
                  </Typo24DarkBlueGreyHKGroteskBold>
               </DomainLogoAndName>
               <DomainExperts>
                  <Typo12SteelHKGroteskSemiBold>
                     {domainExperts}
                  </Typo12SteelHKGroteskSemiBold>
                  <DomainExpertsList>
                     {this.displayDomainExperts()}
                  </DomainExpertsList>
               </DomainExperts>
            </DomainNameAndExperts>
            <Description>
               <Typo14DarkBlueGreyHKGroteskRegular>
                  {domainDescription}
               </Typo14DarkBlueGreyHKGroteskRegular>
            </Description>
            <DomainStatsAndLeaveButton>
               <DomainStats
                  domainFollowers={domainFollowers}
                  domainPosts={domainPosts}
               />
               <SecondaryButton children={LeaveText} />
            </DomainStatsAndLeaveButton>
         </DomainDescriptionBlock>
      )
   }
}
export { DomainDescription }
