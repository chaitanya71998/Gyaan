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
interface CreatePostProps{
   onSubmitPostDetails:any
   onChangeDomainValue:any
   onChangePostTitle:any
   onChangePostDescription:any
   onChangeDomainTagsValue:any
   hadAllFieldsEntered:any

   postTitle:any
   postDescription:any

   followingDomains:any

   getDomainTypes:any
   domainTagsList:any
   domainTagsListAPIStatus:number
   domainsListAPIError:any
   domainsListAPIStatus:number
}

@observer
class CreatePost extends Component <CreatePostProps>{
   createPost = props => {
      const {
         onSubmitPostDetails,
         onChangeDomainValue,
         onChangePostTitle,
         onChangePostDescription,
         onChangeDomainTagsValue,

         hadAllFieldsEntered,

         postTitle,
         postDescription,

         followingDomains,

         domainTagsList,
         domainTagsListAPIStatus
      } = this.props
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
                     rows={50}
                     required
                  ></PostDescription>
               </PostDescriptionBlock>

               <SubmitBlock>
                  <SubmitButton
                     type='submit'
                     onClick={onSubmitPostDetails}
                    
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
      const {
         domainsListAPIStatus,
         domainsListAPIError,
         getDomainTypes
      } = this.props
      
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
