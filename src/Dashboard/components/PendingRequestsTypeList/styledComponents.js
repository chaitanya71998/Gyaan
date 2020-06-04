import styled from "@emotion/styled";
import tw from "tailwind.macro";

import { colors } from "../../../Common/style_guide/themes/Colors";

const {steel}=colors;

export const Div = styled.div``;
 
export const Button = styled.button`
${tw`flex justify-between items-center`}
color:${steel};
padding-left:20px;`;

export const Icons = styled.span`
${tw`mx-2`}`;

export const  RequestApprovals = styled.div`
${tw`flex items-center`}`;