import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, computed } from 'mobx'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import Dashboard from '../../components/Dashboard'
import Select from 'react-select'
import { API_SUCCESS } from '@ib/api-constants'
import {
   Div,
   PostTitleBlock,
   Form,
   PostTitle,
   DomainsAndTagsBlock,
   DomainsDropDown,
   TagsDropDown,
   PostDescriptionBlock,
   PostDescription,
   SubmitBlock,
   SubmitButton
} from './styledComponents'
import { DashboardStore } from "../../stores/DashboardStore"


interface CreatePostRouteProps {

}

interface InjectedProps extends CreatePostRouteProps {
   dashboardStore: DashboardStore
}


@inject('dashboardStore')
@observer
class CreatePostTestFile extends Component<CreatePostRouteProps>{
   @observable postTitle: string | number | string[] | undefined
   @observable postDescription: string | number | string[] | undefined
   @observable selectedTag!: string
   @observable selectedTagId: any
   @observable selectedDomain!: string
   @observable selectedDomainId: any

   constructor(props) {
      super(props)
      this.postTitle = ''
      this.postDescription = ''
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getDashboardStore = () => {
      return this.getInjectedProps().dashboardStore
   }
   onChangeDomainValue = (optionValue) => {
      this.selectedDomain = optionValue.label
      this.selectedDomainId = optionValue.value
      this.getTagsForTheDomain(optionValue.value)
   }

   onChangeDomainTagsValue = (optionValue) => {
      this.selectedTag = optionValue.label
      this.selectedTagId = optionValue.value
   }
   getTagsForTheDomain = async (domainId: string) => {

      const { createDomainTags } = this.getDashboardStore()
      await createDomainTags(Number(domainId))
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
   onChangePostDescription = (event: { target: { value: string } }) => {
      this.postDescription = event.target.value
   }
   @computed get hadAllFieldsEntered() {
      if (
         this.postTitle != '' &&
         this.postDescription != '' &&
         this.selectedDomain != '' &&
         this.selectedTag != ''
      ) {
         return false
      }
      return true
   }

   async componentDidMount() {

      await this.getDashboardStore().getDomainTypes()
   }
   render() {

      const {
         domainsListAPIStatus,
         domainsListAPIError,
         getDomainTypes,
         followingDomains,
         domainTagsList,
         domainTagsListAPIStatus
      } = this.getDashboardStore()

      if (domainsListAPIStatus === API_SUCCESS) {
         const followingDomainsList = followingDomains.map((domain: { domainName: string; domainId: number }) => {
            return {
               label: domain.domainName,
               value: domain.domainId
            }
         })
         const domainTags = domainTagsList.map((tag: { tagName: string; tagId: number }) => {
            return {
               label: tag.tagName,
               value: tag.tagId
            }
         })
         const CreatePostTestFile = () => {
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
                           rows={50}
                           required
                        ></PostDescription>
                     </PostDescriptionBlock>

                     <SubmitBlock>
                        <SubmitButton
                           type='submit'
                           onClick={this.onSubmitPostDetails}
                           disabled={this.hadAllFieldsEntered}
                           value='Submit'
                        >
                           Submit Post
                        </SubmitButton>
                     </SubmitBlock>
                  </Form>
               </Div>
            )
         }
         return <Dashboard TimeLine={CreatePostTestFile} />
      }
      return (
         <LoadingWrapperWithFailure
            onRetryClick={getDomainTypes}
            apiStatus={domainsListAPIStatus}
            apiError={domainsListAPIError}
         />
      )
   }
}

export { CreatePostTestFile }
