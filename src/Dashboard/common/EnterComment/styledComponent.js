import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import { colors } from '../../../Common/style_guide/themes/Colors'

const { light_blue_grey, white, steel_40 } = colors

export const InputCommentForm = styled.form`
   ${tw`flex items-center`}
   width:500px;
   height: 48px;
   margin: 8px 8px 24px 72px;
   padding: 8px 12px;
   border: 2px solid ${light_blue_grey};
   border-radius: 3px;
   background-color: ${white};
`
export const SubmitComment = styled.button`
   height: 30px;
`

export const InputComment = styled.input`
   ${tw`m-3 pl-2`}
   flex-grow:1;
   height: 40px;
   max-width: 500px;
   box-sizing: border-box;

   background-color: ${white};
   ::placeholder {
      font-family: HKGrotesk;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.71;
      letter-spacing: normal;
      color: ${steel_40};
   }
`
