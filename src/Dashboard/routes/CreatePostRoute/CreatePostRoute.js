import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Div } from './styledComponents'
import { Comment } from '../../common/Comment'
import { observable, computed } from 'mobx'
import { CreatePost } from '../../components/CreatePost'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import Dashboard from '../../components/Dashboard'

@inject('dashboardStore')
@observer
class CreatePostRoute extends Component {
   @observable postTitle
   @observable postDescription
   @observable selectedTag
   @observable selectedDomain

   constructor() {
      super()
      this.postTitle = ''
      this.postDescription = ''
   }
   onChangeDomainValue = event => {
      this.selectedDomain = event.target.value
   }
   onChangePostTitle = event => {   
      this.postTitle = event.target.value
   }
   onSubmitPostDetails = event => {
      event.preventDefault()
      if (this.hadAllFieldsEntered) {
         console.log(
            this.postTitle,
            this.postDescription,
            this.selectedTag,
            this.selectedDomain
         )
      }
   }
   onChangePostDescription = event => {
      this.postDescription = event.target.value
   }
   @computed get hadAllFieldsEntered() {
      if (
         this.postTitle != '' &&
         this.postDescription != '' &&
         this.selectedDomain != '' &&
         this.selectedTag != ''
      ) {
         return true
      }
      return false
   }
   componentDidMount() {
      const { dashboardStore } = this.props
      dashboardStore.getDomainTypes()
   }
   render() {
      
      const { dashboardStore } = this.props
      const {
         domainsListAPIStatus,
         domainsListAPIError,
         getDomainTypes,
         domainTagsList,
         domainTagsListAPIStatus
      } = dashboardStore
      const createPostComponent = () => {
         return (
            <Div>
               <CreatePost
                  onChangeDomainValue={this.onChangeDomainValue}
                  onChangePostTitle={this.onChangePostTitle}
                  onSubmitPostDetails={this.onSubmitPostDetails}
                  onChangePostDescription={this.onChangePostDescription}
                  domainTags={domainTagsList}
                  domainTagsStatus={domainTagsListAPIStatus}
                  hadAllFieldsFilled={this.hadAllFieldsEntered}
                  postTitle={this.postTitle}
                  postDescription={this.postDescription}
               />
            </Div>
         )
      }
      const createPostUI = () => {
         return <Dashboard TimeLine={createPostComponent} />
      }
      return (
         <LoadingWrapperWithFailure
            apiStatus={domainsListAPIStatus}
            renderSuccessUI={createPostUI}
            onRetryClick={getDomainTypes}
            apiError={domainsListAPIError}
         />
      )
   }
}

export { CreatePostRoute }
/*
<Comment
            profilePic={}
            authorName={}
            commentDateAndTime={}
            comment={}
            hasReacted={}
            reactionsCount={}
            repliesCount={}
            replies={}
            isAnswerToPost={}
            approvedUser={}
            postDomain={}/>
            profilePic={}
            authorName={}
            commentDateAndTime={}
            comment={}
            hasReacted={}
            reactionsCount={}
            repliesCount={}
            replies={}
            isAnswerToPost={}
            approvedUser={}
            postDomain={}


        profilePic,
        authorName,
        commentDateAndTime,
        comment,
        isAnswerToPost,
        hasReacted,
        reactionsCount,
        commentsCount,
        approvedUser,
        postDomain,*/
