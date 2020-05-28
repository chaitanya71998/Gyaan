import React,{ Component } from "react";
import { observer } from "mobx-react";
import { InputElement } from "../../../components/common/InputElement";
import { ButtonElement } from "../../../components/common/ButtonElement";
import { ImageElement } from "../../../components/common/ImageElement";
import {strings} from "../../i18n";
import { ImageBlock,CreatAePostButton,HeaderBlock} from "./styledComponents";

const {logo} = strings
@observer
class Header extends Component{
render(){
    return ( <HeaderBlock>
           
            <ImageBlock>
                <ImageElement
                    src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/2a1a28bc-1607-43a8-a4b8-1ff44c3c3324.svg"/>
                    alt={logo}
            </ImageBlock>
            <CreatePostButton/>
            <ImageElement 
                src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/3ad47eab-2937-4eb2-ab70-9bc8cb0fea76@3x.png"
                alt = {profilePic}/>
        </HeaderBlock>
    )
}
}

export { AppHomeScreen }