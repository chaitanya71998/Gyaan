import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import { colors } from '../../../Common/style_guide/themes/Colors'

const { steel,yellow_orange_two,off_white,dark_blue_grey } = colors

export const Div = styled.div``

export const Button = styled.button`
${tw`flex justify-between items-center`}
color:${steel};
padding-left:20px;`

export const MenuButton = styled.button`
${tw`w-full flex justify-between pl-5 pr-3`}
:hover {
    background-color: #fff8e6;
    border: none;
 }
`;


export const Number = styled.span`
${tw`flex items-center justify-center`}
background-color: ${off_white};
border-radius:100px;
width:24px;
height:24px;`;
export const NumberLiteral = styled.span`
width: 24px;
height: 16px;
font-family: Rubik;
font-size: 12px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: 0.12px;
color: ${yellow_orange_two};`;

export const Name = styled.span`
width: 100%;
display: inherit;
text-align: left;

:hover {
   background-color: ${off_white};
   border: none;`;