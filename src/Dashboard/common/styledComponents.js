import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../Common/style_guide/themes/Colors'

const { light_blue_grey, bright_blue_10, white_two } = colors
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

export const RequestType = styled.div`
   ${tw`flex justify-between items-center ml-5`}
`

export const PostsBlock = styled.div`
${tw`my-5 `}
border :1px solid ${light_blue_grey};

`

export const TimelineDiv = styled.div`
   height: 90vh;
   overflow: scroll;
   padding: 20px 40px;
   background-color: ${white_two};
   border-collapse: collapse;
`
export const ToggleButton = styled.span`
   ${tw`m-2`}
`