import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'

import Dashboard from '../../components/Dashboard'

import { API_SUCCESS } from '@ib/api-constants'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import { PostDetails } from '../../components/PostDetails'

@inject('dashboardStore')
@observer
class PostRoute extends Component {
   @observable isAllDomainPage
   componentDidMount() {
      const { dashboardStore, match } = this.props
      const { params } = match
      const { domainId, domainType } = params
      dashboardStore.getDomainTypes()
      if (domainType === 'allDomainPosts') {
         dashboardStore.getAllDomainsPosts()
      } else {
         dashboardStore.createDomainModelObj(domainId)
      }
   }
   render() {
      const { dashboardStore, match } = this.props
      const { domainModel, postsList } = dashboardStore
      const { params } = match
      const { postId, domainId, domainType } = params

      switch (domainType) {
         case 'allDomainPosts': {
            if (dashboardStore.postsListAPIStatus === API_SUCCESS) {
               const postObj = postsList.find(
                  post => post.postId === Number(postId)
               )
               const PostDetailsWithIdAsParams = () => {
                  return <PostDetails postData={postObj} />
               }
               return (
                  <>
                     <Dashboard TimeLine={PostDetailsWithIdAsParams} />
                  </>
               )
            }
            return <LoadingWrapperWithFailure />
         }
         default: {
            if (domainModel) {
               if (
                  domainModel.domainPostsAPIStatus === API_SUCCESS &&
                  domainModel.domainDescriptionAPIStatus === API_SUCCESS
               ) {
                  const postObj = domainModel.domainPosts.find(
                     post => post.postId === Number(postId)
                  )
                  const PostDetailsWithIdAsParams = () => {
                     return <PostDetails postData={postObj} />
                  }
                  return (
                     <>
                        <Dashboard
                           pendingRequests={domainModel.domainRequestsList}
                           TimeLine={PostDetailsWithIdAsParams}
                        />
                     </>
                  )
               }
            }
            return <LoadingWrapperWithFailure />
         }
      }
   }
}

export default withRouter(PostRoute)
