import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from "../../../Common/style_guide/themes/Colors"



const { steel,bright_blue_10 } = colors

export const Div = styled.div``


export const Button = styled.button`
${tw`flex w-full justify-between items-center`}
color:${steel};
padding-left:20px;`

export const DomainTypeButton = styled.button`
   width: 100%;
   display: inherit;
   text-align: left;
   padding-left: 20px;
   :hover {
      background-color: ${bright_blue_10};
      border: none;
   }
`