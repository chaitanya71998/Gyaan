import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from "../../../Common/style_guide/themes/Colors"

const {steel,yellow_orange_two}=colors
export const Div = styled.div`
   ${tw`my-3 `}
`
export const ToggleButton = styled.span`
   ${tw`m-2`}
`
export const Span = styled.span`
   ${tw`flex items-center `}
   color: ${yellow_orange_two};

`
export const Button = styled.button`
${tw`flex justify-between items-center`}
color:${steel};
padding-left:20px;
  
`


export const Icons = styled.span`
   ${tw`mx-2`}
`

export const RequestApprovals = styled.div`
   ${tw`flex items-center`}
`
