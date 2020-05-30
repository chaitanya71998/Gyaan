import styled from '@emotion/styled';
import tw from "tailwind.macro";

import { colors } from "../../../../style_guide/themes/Colors";

const {greenish_teal,dark_blue_grey} = colors

export const PostProfile = styled.div`
${tw`flex items-center`};`;


export const Header = styled.div`
${tw`flex justify-between items-center`}
margin:8px 16px;
`; 

export const Div = styled.div``;

export const AuthorAndPostTime =styled.div`
height:50px;
margin:0px 12px;`;

export const PostProfileThumbnail = styled.img`
width:40px;
height:40px;
background-color:${greenish_teal};
border-radius:50%;
:alt{
    ${tw`flex items-center`}
}`;




