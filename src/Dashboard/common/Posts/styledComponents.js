import styled from '@emotion/styled';
import tw from "tailwind.macro";
import { Typo16DarkBlueGreyHKGroteskRegular } from "../../../../style_guide/Typos";


export const Header = styled.div`
${tw`flex justify-between`}`; 

export const Div = styled.div``;


export const ReactionAndComments = Typo16DarkBlueGreyHKGroteskRegular.withComponent("span");


export const Footer = styled.div`
${tw` flex ${props=>props.hasTags?"justify-between":"justify-end"}`}`;


export const AuthorAndPostTime = styled.div``;