import { computed, observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import { Component } from 'react'
import { CreatePost } from '../../components/CreatePost'
import { DashboardStore } from "../../stores/DashboardStore"
import Dashboard from "../../components/Dashboard"
import LoadingWrapperWithFailure from "../../../Common/components/LoadingWrapperWithFailure"


interface CreatePostRouteProps {
   dashboardStore: DashboardStore
}
@inject('dashboardStore')
@observer
class CreatePostRoute extends Component<CreatePostRouteProps> {
   @observable postTitle: string
   @observable postDescription: string
   @observable selectedTag!: string
   @observable selectedDomain!: string

   constructor(props) {
      super(props)
      this.postTitle = ''
      this.postDescription = ''
   }
   onChangeDomainValue = (event: { target: { value: string } }) => {
      this.selectedDomain = event.target.value
   }
   onChangePostTitle = (event: { target: { value: string } }) => {
      this.postTitle = event.target.value
   }
   onSubmitPostDetails = (event: { preventDefault: () => void }) => {
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
   onChangePostDescription = (event: { target: { value: any } }) => {
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
