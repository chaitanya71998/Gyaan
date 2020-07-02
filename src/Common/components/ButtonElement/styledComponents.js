import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import { colors } from '../../style_guide/themes/Colors'

const { neon_red_5, white } = colors

export const Button = styled.button``

export const SecondaryButton = styled.button`
${tw`px-6 py-2`}

border-radius: 4px;
  background-color: ${neon_red_5}
}`

export const RoundButton = css`
   border-radius: 50%;
   background-color: ${neon_red_5};
`

export const Round = styled.button`
   width: 100px;
   padding: 8px 16px;
`
