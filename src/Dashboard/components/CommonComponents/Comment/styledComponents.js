import styled from "@emotion/styled";
import tw from "tailwind.macro";

import { Typo16DarkBlueGreyHKGroteskRegular, Typo14SteelHKGroteskRegular } from "../../../../style_guide/Typos";
import { colors } from "../../../../style_guide/themes/Colors";

const {light_blue_grey} = colors

export const Div = styled.div``;

export const CommentHeader = styled.div`
${tw` my-6`}`;

export const AnswerTypeComment = styled.div`
${tw`flex items-center`}`;
export const DateAndTime = Typo14SteelHKGroteskRegular.withComponent("span");

export const CommentBlock = styled.div`

`;
export const Footer = styled.div`
${tw` flex ${props=>props.hasAnswer?"justify-between":"justify-end"}`}`;

export const Numbers = Typo16DarkBlueGreyHKGroteskRegular.withComponent("span");

export const CommentReactions = styled.div`
${tw`flex items-center justify-end w-full`}`;
export const ApprovedAnswer = styled.p``;