import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, computed } from 'mobx'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import Dashboard from '../../components/Dashboard'
import Select from 'react-select'
import { API_SUCCESS } from "@ib/api-constants"
import {Div, PostTitleBlock, Form, PostTitle, DomainsAndTagsBlock, DomainsDropDown, TagsDropDown, PostDescriptionBlock, PostDescription, SubmitBlock, SubmitButton } from "./styledComponents";


@inject('dashboardStore')
@observer
class CreatePostTestFile extends Component {
   @observable postTitle
   @observable postDescription
   @observable selectedTag
   @observable selectedTagId
   @observable selectedDomain
   @observable selectedDomainId

   constructor() {
      super()
      this.postTitle = ''
      this.postDescription = ''
   }
   onChangeDomainValue = (optionValue) => {
    this.selectedDomain=optionValue.label;
    this.selectedDomainId=optionValue.value;
       this.getTagsForTheDomain(optionValue.value);
   }

   onChangeDomainTagsValue = (optionValue) => {
    this.selectedTag=optionValue.label;
    this.selectedTagId = optionValue.value;
   }
   getTagsForTheDomain=async (domainId)=>{
        const {dashboardStore} = this.props;
        const { createDomainTags } = dashboardStore;
        await createDomainTags(domainId)
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
         return false;
      }
      return true;
   }

   async componentDidMount() {
      const { dashboardStore } = this.props
      await dashboardStore.getDomainTypes()
   }
   render() {
      const { dashboardStore } = this.props
      const {
         domainsListAPIStatus,
         domainsListAPIError,
         getDomainTypes,
         followingDomains,
         domainTagsList,
         domainTagsListAPIStatus
      } = dashboardStore;
if(domainsListAPIStatus===API_SUCCESS){
    const followingDomainsList = followingDomains.map(domain => {
        return {
           label: domain.domainName,
           value: domain.domainId
        }
     })
     const domainTags = domainTagsList.map(tag => {     
        return {
           label: tag.tagName,
           value: tag.tagId
        }
     })
     const CreatePostTestFile = ()=>{
            return (        
            <Div>
            <Form onSubmit={this.onSubmitPostDetails}>
               <PostTitleBlock>
                  <PostTitle
                     type='text'
                     value={this.postTitle}
                     placeholder='Title'
                     onChange={this.onChangePostTitle}
                     required
                  />
               </PostTitleBlock>
               <DomainsAndTagsBlock>
                  <DomainsDropDown>
                     <Select
                        options={followingDomainsList}
                        onChange={this.onChangeDomainValue}
                        required
                     />
                  </DomainsDropDown>
                  <TagsDropDown>
                     {domainTagsListAPIStatus === API_SUCCESS ? (
                        <Select
                           options={domainTags}
                           onChange={this.onChangeDomainTagsValue}
                           required
                        />
                     ) : (
                        <b>Attach post tags here</b>
                     )}
                  </TagsDropDown>
               </DomainsAndTagsBlock>

               <PostDescriptionBlock>
                  <PostDescription
                     id='postDescription'
                     placeholder='Post description'
                     value={this.postDescription}
                     onChange={this.onChangePostDescription}
                     name='postDescription'
                     rows='50'
                     required
                  ></PostDescription>
               </PostDescriptionBlock>

               <SubmitBlock>
                  <SubmitButton
                     type='submit'
                     onClick={this.onSubmitPostDetails}
                     isDisabled={this.hadAllFieldsEntered}
                     disabled={this.hadAllFieldsEntered}
                     value='Submit'
                  >
                     Submit Post
                  </SubmitButton>
               </SubmitBlock>
            </Form>
         </Div>  )
   }
   return   <Dashboard TimeLine = {CreatePostTestFile}/>
   }
    return <LoadingWrapperWithFailure onRetryClick={getDomainTypes} apiStatus={domainsListAPIStatus} apiError={domainsListAPIError}/>
   }
}

export { CreatePostTestFile }

