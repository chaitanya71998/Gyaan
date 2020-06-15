import React, { Component } from 'react'
import { API_SUCCESS } from '@ib/api-constants'
import Select from 'react-select'
import { observer, inject } from 'mobx-react'

import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'

import {
   SubmitButton,
   PostDescription,
   DomainsAndTagsBlock,
   Div,
   SubmitBlock,
   Form,
   PostTitle,
   PostDescriptionBlock,
   TagsDropDown,
   PostTitleBlock,
   DomainsDropDown
} from './styledComponents'

@inject('dashboardStore')
@observer
class CreatePost extends Component {
   createPost = props => {
      const {
         dashboardStore,
         onSubmitPostDetails,
         hadAllFieldsEntered,
         onChangePostDescription,
         onChangePostTitle,
         onChangeDomainValue,
         postTitle,
         postDescription
      } = this.props
      const {
         followingDomains,
         domainTagsList,
         domainTagsListAPIStatus
      } = dashboardStore
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
      return (
         <Div>
            <Form onSubmit={onSubmitPostDetails}>
               <PostTitleBlock>
                  <PostTitle
                     type='text'
                     value={postTitle}
                     placeholder='Title'
                     onChange={onChangePostTitle}
                     required
                  />
               </PostTitleBlock>

               <DomainsAndTagsBlock>
                  <DomainsDropDown>
                     <Select
                        options={followingDomainsList}
                        onChange={onChangeDomainValue}
                        required
                     />
                  </DomainsDropDown>
                  <TagsDropDown>
                     {domainTagsListAPIStatus === API_SUCCESS ? (
                        <Select
                           options={domainTags}
                           onChange={onChangeDomainTagsValue}
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
                     value={postDescription}
                     onChange={onChangePostDescription}
                     name='postDescription'
                     rows='50'
                     required
                  ></PostDescription>
               </PostDescriptionBlock>

               <SubmitBlock>
                  <SubmitButton
                     type='submit'
                     onClick={onSubmitPostDetails}
                     isDisabled={hadAllFieldsEntered}
                     disabled={hadAllFieldsEntered}
                     value='Submit'
                  >
                     Submit Post
                  </SubmitButton>
               </SubmitBlock>
            </Form>
         </Div>
      )
   }
   render() {
      const { dashboardStore } = this.props
      const {
         domainsListAPIStatus,
         domainsListAPIError,
         getDomainTypes
      } = dashboardStore
      domainsListAPIStatus
      return (
         <LoadingWrapperWithFailure
            renderSuccessUI={this.createPost}
            apiStatus={domainsListAPIStatus}
            apiError={domainsListAPIError}
            onRetryClick={getDomainTypes}
         />
      )
   }
}

export { CreatePost }
