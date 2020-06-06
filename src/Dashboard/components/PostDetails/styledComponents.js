import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import { colors } from '../../../Common/style_guide/themes/Colors'

const {
   greenish_teal,
   steel_40,
   bright_blue_10,
   light_blue_grey,
   white
} = colors

export const Div = styled.div``

export const TagsBlock = styled.div`
   ${tw`flex items-center`}
`

export const PostComments = styled.div`
   ${tw`mb-3`}
`

export const PostTitle = styled.div`
   ${tw`mb-3`}
`

export const PostedDatedAndTime = styled.div`
   ${tw`mb-3`}
`

export const PostTags = styled.div`
   ${tw`mb-3 flex items-center`}
`

export const PostDescription = styled.div`
   ${tw`mb-3`}
`

export const CommentsBlock = styled.div``

export const PostContainer = styled.div`
${tw`p-5 m-6`}
background-color:${white};

border 1px solid ${light_blue_grey};`

export const Tags = styled.div`
   ${tw`flex items-center`}
   padding:4px 4px;
   background-color: ${bright_blue_10};
`

export const AnswerPost = styled.div`
${tw`py-4`}
background-color:${steel_40};

border-radius:4px;
opacity:0.9;`

export const PostProfileThumbnail = styled.img`
   width: 40px;
   height: 40px;
   background-color: ${greenish_teal};
   border-radius: 50%;
`

export const PostDetailsBlock = styled.div`
   border-bottom: 2px solid ${light_blue_grey};
   margin-bottom: 20px;
`

export const SeeAllComments = styled.button`
   ${tw`flex items-center border-transparent`}
   margin:8px 8px 8px 72px;
`
