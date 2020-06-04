import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import { colors } from '../../../Common/style_guide/themes/Colors'

const { greenish_teal, bright_blue_10, light_blue_grey } = colors
export const Header = styled.div`
   ${tw`flex justify-between items-center`}
   margin:8px 24px;
`

export const Div = styled.div``

export const PostComments = styled.div``

export const Tags = styled.div`
   ${tw`flex items-center`}
   padding:4px 4px;
   background-color: ${bright_blue_10};
`

export const AuthorAndPostTime = styled.div`
   height: 50px;
`
export const PostProfileThumbnail = styled.img`
   width: 40px;
   height: 40px;
   background-color: ${greenish_teal};
   border-radius: 50%;
`

export const PostTitle = styled.div`
   margin: 8px 8px 24px 72px;
`

export const PostDetails = styled.div`
   border-bottom: 2px solid ${light_blue_grey};
   margin-bottom: 20px;
`

export const Footer = styled.div`
   ${tw` flex`}
   justify-content:justify-between;
   margin: 8px 8px 24px 72px;
`

export const SeeAllComments = styled.button`
   ${tw`flex items-center border-transparent`}
   margin:8px 8px 8px 72px;
`
