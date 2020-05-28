import React,{ Component } from "react"
import { observer } from "mobx-react";
import { ImageElement } from "../../../components/common/ImageElement";
import { AllDomains } from "../AllDomains";
import { FollowingDomains } from "../FollowingDomains";
import { SuggestedDomains } from "../SuggestedDomains";
import { AddNewDomain } from "../AddNewDomain";
import { UserPostsUnderPending } from "../UserPostsUnderPending";
import { UserReviewPendings } from "../UserReviewPendings/UserReviewPendings";
import { Pending } from "../Pending";
import { FollowRequests } from "../FollowRequests";
import strings from "../../i18n";

const {logo} = strings;
@observer
class SideBar extends Component{
render(){
    return(
        <div>
            <ImageElement
                src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/2a1a28bc-1607-43a8-a4b8-1ff44c3c3324.svg"
                alt={logo}/>
            <AllDomains/>
            <FollowingDomains/>
            <SuggestedDomains/>
            <AddNewDomain/>
            <UserPostsUnderPending/>
            <UserReviewPendings/>
            <Pending/>
            <FollowRequests/>
        </div>
    )
}
}

export { SideBar }