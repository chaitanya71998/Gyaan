import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import { colors } from '../../../Common/style_guide/themes/Colors'

const { light_blue_grey, bright_blue_10, white, steel_40 } = colors

export const DomainDescriptionBlock = styled.div``

export const DomainNameAndExperts = styled.div`
   ${tw`flex items-center justify-between`}
`

export const DomainLogoAndName = styled.div`
   ${tw`flex items-center my-3`}
`

export const DomainLogo = styled.div`
   ${tw`flex items-center justify-center mr-4`}
   width: 50px;
   height: 50px;
   border-radius: 66.3px;
   background-color: ${bright_blue_10};
`

export const DomainExperts = styled.div`
   ${tw`flex  flex-col items-center justify-center`}
`

export const DomainExpertsList = styled.div`
   ${tw`flex flex-wrap items-center`}
`

export const Description = styled.div`
   ${tw`ml-24 mr-40`}
`

export const DomainStatsAndLeaveButton = styled.div`
   ${tw`flex justify-between items-center ml-8`}
`
