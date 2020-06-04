import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { colors } from "../../../Common/style_guide/themes/Colors";

const {steel, white_two} = colors;
export const MenuBlock = styled.div`
${tw`h-screen`}
min-width:240px;
border:1px solid ${steel};
`;
export const Div = styled.div`
${tw``}
flex-grow:1;
border:2px solid ${steel};
border-collapse:collapse;
`;

export const DashboardBlock = styled.div`
${tw`flex`}
border:2px solid ${steel};
`;

