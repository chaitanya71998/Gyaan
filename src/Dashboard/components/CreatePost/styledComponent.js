import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { colors } from "../../../Common/style_guide/themes/Colors";

const {white,bright_blue,black,white_two,light_blue_grey,dark_blue_grey,cool_grey} = colors

export const Form = styled.form`
height:screen;
background-color:${white};
padding:20px;
`;

export const PostTitleBlock = styled.div`
${tw`my-4`}`;

export const PostTitle = styled.input`
font-family: HKGrotesk;
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${black};
  outline:none;
  :placeholder{
font-family: HKGrotesk;
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${black};
  outline:none; 
  }`;

export const PostDescriptionBlock = styled.div`
${tw`my-4`}`;

export const PostDescription = styled.textarea`
width:100%;
height:150px;
resize:none;
outline:none;
overflow:auto;
font-family: HKGrotesk;
font-size: 20px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.6;
letter-spacing: normal;
color: ${black};
:placeholder{
    font-family: HKGrotesk;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: ${cool_grey};
}`;

export const Div = styled.div`
${tw`h-screen `}
margin-bottom:auto;
border:1px solid ${light_blue_grey};
padding:20px;
background-color:${white_two}`;

export const DomainsAndTagsBlock = styled.div`
${tw`flex justify-between items-center my-4`}

`;

export const DomainsDropDown = styled.div`
border:1px solid ${light_blue_grey};
outline:none;
border-radius:4px;
${tw`mr-3 `}
flex-grow:1;`;

export const TagsDropDown = styled.div`
border:1px solid ${light_blue_grey};
outline:none;
border-radius:4px;
${tw`ml-3 mr-2`}
flex-grow:1;
`;

export const SubmitBlock = styled.div`
${tw`flex  justify-end w-full`}
border-radius:4px;
`; 


export const SubmitButton = styled.button`
${tw`py-3 px-3 flex justify-center items-center`}
border-radius:4px;
background-color:${props=>props.isDisabled?`${bright_blue}`:`${cool_grey}`};
color:${white};`; 