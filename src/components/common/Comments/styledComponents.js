import styled from "@emotion/styled";
import tw from "tailwind.macro";

import { Typo16DarkBlueGreyHKGroteskRegular } from "../../../style_guide/Typos";

export const Div = styled.div``;

export const Heading = styled.div`
`;

export const Footer = styled.div`
${tw` flex ${props=>props.hasAnswer?"justify-between":"justify-end"}`}`;

export const ReactionAndComments = Typo16DarkBlueGreyHKGroteskRegular.withComponent("span");

export const ApprovedAnswer = styled.p``;