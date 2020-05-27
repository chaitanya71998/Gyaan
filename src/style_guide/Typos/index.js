import styled from "@emotion/styled";
import { colors } from "../themes/Colors";
const {dark_blue_grey,steel,neon_red} =colors;
export const Typo32DarkBlueGreyRubikRegular = styled.p`
width: 214px;
height: 80px;
text-align:center;
font-family: Rubik;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: ${dark_blue_grey};
  margin:24px 0px;
`;

export const Typo14DarkBlueGreyHKGroteskRegular = styled.p`
font-family: HKGrotesk;
font-size: 14px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.71;
letter-spacing: normal;
color:${dark_blue_grey};`;

export const Typo12NeonRedHKGroteskRegular=styled.label`
font-family: HKGrotesk;
font-size: 12px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: normal;
color: ${neon_red};
margin:8px 0px`;

export const Typo12SteelHKGroteskSemiBold =styled.label`
font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px; 
  color: ${steel};
  
`; 