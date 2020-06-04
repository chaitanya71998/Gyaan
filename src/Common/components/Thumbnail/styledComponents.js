import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import { colors } from '../../style_guide/themes/Colors'

const { ice_blue, greenish_teal, light_blue_grey_24 } = colors

export const MediumThumbnail = styled.img`
   width: 40px;
   height: 40px;
   background-color: ${greenish_teal};
   border-radius: 50%;
   :alt {
      ${tw`flex items-center`}
   }
`
export const SmallThumbnail = styled.img`
   width: 32px;
   height: 32px;
   background-color: ${'red'};
   border-radius: 80%;
   border: transparent;
   :alt {
      ${tw`flex items-center`}
   }
`

export const LargeThumbnail = styled.img`
   width: 48px;
   height: 48px;
   background-color: ${light_blue_grey_24};
   border-radius: 50%;
   :alt {
      ${tw`flex items-center`}
   }
`

export const Img = styled.img``
