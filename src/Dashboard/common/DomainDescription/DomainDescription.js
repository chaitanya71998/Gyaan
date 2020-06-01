import React,{ Component } from "react";
import { observer } from "mobx-react";

import { Typo24DarkBlueGreyHKGroteskBold, Typo12SteelHKGroteskSemiBold, Typo18WhiteHKGroteskRegular } from "../../../Common/style_guide/Typos";
import { SmallThumbnail, LargeThumbnail } from "../../../Common/components/Thumbnail/styledComponents";

import strings from "../../i18n/strings.json";
import { DomainStats } from "../DomainStats";
import { DomainDescriptionBlock, DomainNameAndExperts, DomainLogoAndName, DomainExperts, Description } from "./styledComponent";
import { SecondaryButton } from "../../../Common/components/ButtonElement/styledComponents";


const { domainExperts } = strings;
@observer
class DomainDescription extends Component{
  
    displayDomainExperts=()=>{
            const { domainExpertsList } = this.props;
            const noOfExpertsToShow = 3;
            return domainExpertsList.slice(0,noOfExpertsToShow).map(expert=>{
                const { profilePic,name } = expert;
                return <SmallThumbnail src={profilePic} alt={name[0]}/>
         })
    }
    render(){
        const {domainName,domainDescription,domainFollowers,domainPosts,domainStars} = this.props;
            return (
                <DomainDescriptionBlock>
                        <DomainNameAndExperts>
                            <DomainLogoAndName>
                                <DomainLogo>
                                    <Typo18WhiteHKGroteskRegular>
                                        {domainName[2].toUpperCase()}
                                    </Typo18WhiteHKGroteskRegular>
                                </DomainLogo>
                                <Typo24DarkBlueGreyHKGroteskBold>
                                    {domainName}
                                </Typo24DarkBlueGreyHKGroteskBold>
                            </DomainLogoAndName>
                            <DomainExperts>
                                <Typo12SteelHKGroteskSemiBold>
                                    {domainExperts}
                                </Typo12SteelHKGroteskSemiBold>
                                {this.displayDomainExperts()}
                            </DomainExperts>
                        </DomainNameAndExperts>
                        <Description>
                            <Typo14DarkBlueGreyHKGroteskRegular>
                                {domainDescription}      
                            </Typo14DarkBlueGreyHKGroteskRegular>
                        </Description>
                        <DomainStatsAndLeaveButton>    
                            <DomainStats
                            domainFollowers={domainFollowers} 
                            domainPosts={domainPosts}
                            domainStars={domainStars}/>\
                            <SecondaryButton text={leave}/>
                        </DomainStatsAndLeaveButton>
                </DomainDescriptionBlock>
             )
        }
}
export { DomainDescription  }