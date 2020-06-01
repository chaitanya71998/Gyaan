import React,{ Component } from "react"
import { observer,inject } from "mobx-react";
import { Div,Button} from "./styledComponents"
import { DomainTypeButton } from "../../common/styledComponents";


@inject("dashboardStore")
@observer
class AllDomains extends Component{
  render(){
    const {dashboardStore} = this.props;
    const {getPosts } = dashboardStore
      return (
          <Div><DomainTypeButton onClick={getPosts}>All Domains</DomainTypeButton></Div>
      )
  }
}

export { AllDomains }