import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import {
   Typo16DarkBlueGreyHKGroteskRegular,
   Typo14SteelHKGroteskRegular,
   Typo18DarkBlueGreyHKGroteskMedium
} from '../../../Common/style_guide/Typos'
import { colors } from '../../../Common/style_guide/themes/Colors'

const { light_blue_grey } = colors

export const Div = styled.div``

export const CommentHeader = styled.div`
   ${tw`flex`}
   margin:12px 24px 8px 16px;
`

export const CommenterDetails = styled.div`
   margin: 8px 8px 8px 24px;
`
export const AnswerTypeComment = styled.div`
   ${tw`flex items-center justify-start w-full`}
`

export const DateAndTime = Typo14SteelHKGroteskRegular.withComponent('span')

export const CommentData = styled.div`
   margin: 8px 8px 8px 72px;
`
export const CommentBlock = styled.div``
export const Footer = styled.div`
   ${tw` flex ${props =>
      props.hasAnswer ? 'justify-between' : 'justify-end'}`}
   margin:8px 24px 24px 72px;
`

export const Numbers = Typo16DarkBlueGreyHKGroteskRegular.withComponent('span')

export const CommentReactions = styled.div`
   ${tw`flex items-center justify-end w-full`}
`
export const ApprovedAnswer = styled.p``
