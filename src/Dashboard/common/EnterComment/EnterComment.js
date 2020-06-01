import React,{ Component } from "react"
import { observer } from "mobx-react";
import { observable } from "mobx";
import { IoIosSend } from "react-icons/io";

import  strings from "../../i18n/strings.json";

import { InputComment,SubmitComment, InputCommentForm } from "./styledComponent";

const { enterComment } = strings;
@observer
class EnterComment extends Component{
    @observable inputComment
    constructor(props){
        super(props);
        this.inputComment =props.editComment?(props.editComment):"";
    }
    onChangeInputElement=(event)=>{
        this.inputComment = event.target.value;
    }
    onClickSubmit=(event)=>{
        event.preventDefault();
        this.inputComment="";
    }
render(){
        return(
            <InputCommentForm onSubmit={this.onClickSubmit}>
                <InputComment value={this.inputComment} placeholder={enterComment} onChange={this.onChangeInputElement}/>
                <SubmitComment onClick={this.onClickSubmit}><IoIosSend size="12"/></SubmitComment>
            </InputCommentForm>
        )
    }
}
export { EnterComment  }