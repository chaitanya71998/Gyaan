import styled from "@emotion/styled";

import { colors } from "../../../style_guide/themes/Colors";

import { InputElement } from "../../../components/common/InputElement";
import { ButtonElement } from "../../../components/common/ButtonElement";
import { ImageElement } from "../../../components/common/ImageElement";

const {steel_60,light_blue_grey,bright_blue} =colors;

export const Div = styled.div``;

export const SearchInput = styled.input`
width: 100%;
  box-sizing: border-box;
  border: 2px solid ${light_blue_grey};
  border-radius: 3px;
  background-color: ${white};
  background-image: url('https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/cdad7995-e505-444a-b2d7-417791ebf232.svg');
  background-position: 14px 18px; 
  background-repeat: no-repeat;
  color:${steel_60};
  font-family: HKGrotesk;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: ${steel_60};
  padding: 8px 20px 8px 48px;
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
padding:8px 20px;
border-radius: 4px;
  background-color: ${bright_blue};
`;

export const HeaderBlock= styled.div`
${tw`flex justify-between`}
padding:17px 50px`;

