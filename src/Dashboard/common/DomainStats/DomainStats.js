import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { FaRegUserCircle } from 'react-icons/fa'
import { TiDocument, TiStarOutline } from 'react-icons/ti'

import { colors } from '../../../Common/style_guide/themes/Colors'
import {
   Typo12GreenishTealHKGroteskSemiBold,
   Typo12yellowOrangeHKGroteskSemiBold,
   Typo12PurplishBlueHKGroteskSemiBold
} from '../../../Common/style_guide/Typos'
import { DomainStatsBlock, IconAndCount } from './styledComponent'

const { greenish_teal, yellow_orange, purplish_blue } = colors

@observer
class DomainStats extends Component {
   render() {
      const { domainFollowers, domainPosts, domainStars } = this.props
      return (
         <DomainStatsBlock>
            <IconAndCount>
               <FaRegUserCircle color={yellow_orange} />
               <Typo12yellowOrangeHKGroteskSemiBold
                  children={domainFollowers}
               />
            </IconAndCount>
            <IconAndCount>
               <TiDocument color={greenish_teal} />
               <Typo12GreenishTealHKGroteskSemiBold children={domainPosts} />
            </IconAndCount>
         </DomainStatsBlock>
      )
   }
}
export { DomainStats }
