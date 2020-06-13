import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import { colors } from '../../../Common/style_guide/themes/Colors'

const { steel, neon_red, bright_blue, bright_blue_10, dark_blue_grey } = colors

export const Div = styled.div`
${tw`my-3`}`

export const Button = styled.button`
${tw`flex justify-between items-center`}
color:${steel};
padding-left:20px;`

export const MenuButton = styled.button`
   ${tw`w-full flex justify-between items-center pl-5 pr-3`} :hover {
      background-color: ${bright_blue_10};
      border: none;
   }
`

export const Follow = styled.span`
   font-family: HKGrotesk;
   font-size: 12px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: ${bright_blue};
`;

export const Cancel = styled.span`
   font-family: HKGrotesk;
   font-size: 12px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: ${neon_red};
`

export const Name = styled.span`
width: 100%;
display: inherit;
text-align: left;
`;
