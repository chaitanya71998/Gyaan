import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { colors } from "../../../style_guide/themes/Colors";

const {steel} = colors;
export const MenuBlock = styled.div`
${tw`h-screen`}
width:240px;
border:2px solid ${steel};
`;
export const Div = styled.div`
${tw``}
flex-grow:1;
border:2px solid ${steel};
border-left:none
`;
export const DashboardBlock = styled.div`
${tw`flex`}
border:2px solid ${steel};
`;

