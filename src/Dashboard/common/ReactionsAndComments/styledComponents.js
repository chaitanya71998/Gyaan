import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import { Typo16DarkBlueGreyHKGroteskRegular } from '../../../Common/style_guide/Typos'

export const PostReactions = styled.div`
   ${tw`flex items-center justify-end`}
   flex-grow:1;
`

export const Numbers = Typo16DarkBlueGreyHKGroteskRegular.withComponent('span')
