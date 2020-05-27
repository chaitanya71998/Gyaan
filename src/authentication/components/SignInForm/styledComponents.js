import styled from '@emotion/styled';
import tw from "tailwind.macro";
import { colors } from "../../../style_guide/themes/Colors";

const {bright_blue} = colors;

export const SignInButton = styled.button`
  width: 320px;
  height: 40px;
  border-radius: 4px;
  background-color:${bright_blue};
  margin-top:32px;
  margin-bottom:32px;
  `; 
export const Div =styled.div``;

export const Warning = styled.p`
${tw`text-red-800 text-xs`}
`;

export const SignUpText = styled.p` `;

export const SignUpLink = styled.a`
color:${bright_blue}`;


export const Form = styled.form`
${tw`flex flex-col justify-center  `}
`;

export const SignInBlock = styled.div`
${tw`flex flex-col justify-center  items-center`} `;