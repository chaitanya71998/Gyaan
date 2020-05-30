import styled from "@emotion/styled";
import tw from "tailwind.macro";

import { colors } from "../../../style_guide/themes/Colors";

const {steel}=colors;

export const Div = styled.div``;

 
export const Button = styled.button`
${tw`flex justify-between items-center`}
color:${steel};
padding-left:20px;`;
 