import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const Header = styled.div`
${tw`flex jsutify between`}`; 

export const Div = styled.div``;

export const Footer = styled.div`
${tw` flex ${props=>props.hasTags?"justify-between":"justify-end"}`}`;


export const AuthorAndPostTime = styled.div``;