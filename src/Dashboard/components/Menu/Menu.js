import React,{ Component } from "react"
import { observer } from "mobx-react";
import { ImageElement } from "../../../Common/components/ImageElement";
import { AllDomains } from "../AllDomains";
import { FollowingDomains } from "../FollowingDomains";
import strings from "../../i18n/strings.json";
import { Div,Logo,LogoBlock}  from"./styledComponents"
import { withToggle } from "../../../Common/hoc/withToggle";

const {comapanyName} = strings;

const FollowingDomainsWithToogle = withToggle(FollowingDomains)

@observer
class Menu extends Component{
render(){
    return(
        <Div>
            <LogoBlock>
            <Logo
                src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/2a1a28bc-1607-43a8-a4b8-1ff44c3c3324.svg"
                alt={comapanyName}/>
            </LogoBlock>
            <AllDomains/>
            <FollowingDomainsWithToogle/>
        </Div>
    )
}
}

export { Menu }