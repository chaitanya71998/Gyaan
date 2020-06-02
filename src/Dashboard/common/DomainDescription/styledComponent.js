import styled from "@emotion/styled";
import tw from "tailwind.macro";

import { colors } from "../../../Common/style_guide/themes/Colors";

const {light_blue_grey,bright_blue_10, white,steel_60} =colors


export const DomainDescriptionBlock = styled.div``;

                        
export const DomainNameAndExperts = styled.div`
${tw`flex items-center justify-between`}`;

export const DomainLogoAndName = styled.div`
${tw`flex items-center`}`;

export const DomainLogo = styled.div`
${tw`flex items-center justify-center`}
width: 53px;
height: 53px;
border-radius: 66.3px;
background-color:${bright_blue_10};
`;

export const DomainExperts = styled.div`
${tw`flex flex-col items-center justify-center`}`;

export const Description = styled.div``;

