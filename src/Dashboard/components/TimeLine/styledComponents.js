import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { colors } from "../../../Common/style_guide/themes/Colors";

const {white_two,light_blue_grey,white} = colors
export const Div = styled.div`
height:90vh;
overflow:scroll;
padding:20px 40px;
background-color:${white_two};
`;

export const PostsBlock = styled.div`
${tw`my-5 `}
border :1px solid ${light_blue_grey};
background-color:${white};

`;
