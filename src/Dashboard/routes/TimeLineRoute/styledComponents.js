import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { colors } from "../../../style_guide/themes/Colors";

const {white_two} = colors
export const Div = styled.div`
${tw`h-full`};
padding:20px 40px;
background-color:${white_two};
`;
