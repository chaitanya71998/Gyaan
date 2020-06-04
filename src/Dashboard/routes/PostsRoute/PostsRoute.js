import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";

import  Dashboard  from "../../components/Dashboard";

import { API_SUCCESS } from "@ib/api-constants";
import LoadingWrapperWithFailure from "../../../Common/components/LoadingWrapperWithFailure";
import { PostDetails } from "../../components/PostDetails";

@inject("dashboardStore")
@observer
class PostRoute extends Component{
    @observable postModelObj;
  componentDidMount(){
      
    const { dashboardStore ,match} = this.props;
    const {params} = match;
    const { domainId} = params;
    dashboardStore.createDomainModelObj(domainId);
  }

    render()
        {  
            const { dashboardStore} = this.props;
            const { domainModel } = dashboardStore;

            if(domainModel){
                
                if(domainModel.domainPostsAPIStatus===API_SUCCESS && domainModel.domainDescriptionAPIStatus===API_SUCCESS)
               {
                    const { match } = this.props;
                    const { params } = match;
                    const { postId } = params;
                    const postObj = domainModel.domainPosts.find(post =>post.postId===Number(postId));
                    const PostDetailsWithIdAsParams = ()=>{
                        return <PostDetails postData={postObj}/>
                    }
                    return(
                        <>
                            <Dashboard pendingRequests={domainModel.domainRequestsList} TimeLine={PostDetailsWithIdAsParams} /> 
                        </>
                    )
                }
                return <LoadingWrapperWithFailure/>
            }
            return <LoadingWrapperWithFailure/>
        }
}




export default withRouter(PostRoute);
