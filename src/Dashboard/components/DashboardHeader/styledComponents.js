import styled from "@emotion/styled";
import tw from "tailwind.macro"
import { colors } from "../../../Common/style_guide/themes/Colors";

const {steel_60,light_blue_grey,bright_blue,white} =colors;

export const Div = styled.div`
${tw`flex items-center mx-4`}`;

export const Thumbnail =styled.img`
width:48px;
height:48px`;
export const SearchInput = styled.input`
${tw`m-4`}
  flex-grow:1;
  height:40px;
  max-width:658px;
  box-sizing: border-box;
  padding:8px 40px;
  border: 2px solid ${light_blue_grey};
  border-radius: 3px;
  background-color: ${white};
  background-image: url('https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/cdad7995-e505-444a-b2d7-417791ebf232.svg');
  background-position:  8px; 
  background-repeat: no-repeat;
 
::placeHolder{
  font-family: HKGrotesk;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: ${steel_60};
}
`;

  
export const ImageBlock = styled.div`
padding:12px 24px ;
${tw`flex-grow`}`;

export const CreatePostButton = styled.button`
flex-row:1;
height: 40px;
border-radius: 4px;
background-color: ${bright_blue};
padding:8px 20px;
${tw`m-4`}
`;
export const ButtonText = styled.span`
font-family: HKGrotesk;
font-size: 14px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.71;
letter-spacing: normal;
color: ${white};
`;

export const HeaderBlock= styled.div`
${tw`flex p-4 items-center justify-between`}
height:10vh;
border-bottom:2px solid ${steel_60}
`;

