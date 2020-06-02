import React,{Component} from "react";
import { DomainDescription } from "../../common/DomainDescription";
import { Posts } from "../../common/Posts";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";

@inject("dashboardStore")
@observer
class DomainDetails extends Component{
    @observable domainModelObj;
    componentDidMount(){
        const { dashboardStore,params } = this.props;
        console.log(this.props.params)
        // const {params}= match;
        
        // const { getdomainModel } = dashboardStore;
        // this.domainModelObj = getdomainModel(params);
        // this.getPostAndDescription();
    }

     getPostAndDescription=async()=>{
            this.domainModelObj.getDomainData();
    }
    render(){
        if(this.domainModelObj){
        const {
            domainExperts,
            domainName,
            domainDescription,
            domainFollowers,
            domainStars,
            domainPosts} = this.domainModelObj;
            
        return (
            <>
                <DomainDetailsBlock>
                    <DomainDescription 
                    domainExpertsList={domainExperts} 
                    domainName={domainName} 
                    domainDescription={domainDescription}
                    domainFollowers={domainFollowers}
                    domainPosts={domainPosts}
                    domainStars={domainStars}/>
                </DomainDetailsBlock>
                <Posts/>
            </>)
            }
            else{
                return <p>hi</p>
            }
        
    }
}

export  { DomainDetails }