import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { colors } from '../../../Common/style_guide/themes/Colors'
import {
   Typo12GreenishTealHKGroteskSemiBold,
   Typo12yellowOrangeHKGroteskSemiBold,
   Typo12PurplishBlueHKGroteskSemiBold
} from '../../../Common/style_guide/Typos'
import { Thumbnail } from '../../../Common/components/Thumbnail'

const { greenish_teal, yellow_orange, purplish_blue } = colors

@observer
class DomainDescription extends Component {
   displayDomainExperts = () => {}
   render() {
      const { domainFollowers, domainPosts, domainStars } = this.props
      return (
         <DomainDescription>
            <DomainNameAndExperts>
               <DomainLogo>
                  <Thumbnail thumbnailType={large} />
               </DomainLogo>
               <DomainExperts>{this.displayDomainExperts()}</DomainExperts>
            </DomainNameAndExperts>
         </DomainDescription>
      )
   }
}
export { DomainDescription }
