import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
} from '@ib/api-constants'

import React, { Component } from 'react'
import Dashboardservice from "../../services/DashboardService/DashboardService.fixture";

import { DashboardStore } from "./DashboardStore";
import { resolveWithTimeout } from "../../../Common/utils/TestUtils";
import postsList from '../../fixtures/postsList.json'
import domainTypes from '../../fixtures/domainTypes.json';
import tagsFixtures from '../../fixtures/tagsFixtures.json'
import domainDescription from '../../fixtures/domainDescription.json'
import { resolve } from "path";
import DomainModel from "../models/DomainModel/DomainModel";


describe('Dashboard store Tests', () => {
    let dashboardService;
    let dashboardStore;

    beforeEach(() => {
        dashboardService = new Dashboardservice()
        dashboardStore = new DashboardStore(dashboardService)
    })

    it('should test initialising dashboard store', () => {
        expect(dashboardStore.postsListAPIStatus).toBe(API_INITIAL)
        expect(dashboardStore.domainsListAPIStatus).toBe(API_INITIAL)
        expect(dashboardStore.postListAPIError).toBe(null)
        expect(dashboardStore.domainsListAPIError).toBe(null)
        expect(dashboardStore.postsList).toStrictEqual([])
        expect(dashboardStore.domainTypes).toStrictEqual({})
        expect(dashboardStore.domainTagsListAPIStatus).toBe(API_INITIAL)
        expect(dashboardStore.domainTagsListAPIError).toBe(null);
        expect(dashboardStore.followingDomains).toStrictEqual([]);
        expect(dashboardStore.suggestedDomains).toStrictEqual([]);
        expect(dashboardStore.pendingForReview).toStrictEqual([]);
    })

    it('should test dashboard store  getAllDomainsPosts and getDomainTypes in fetching state', () => {
        const mockLoadingPromise = new Promise(function (resolve, reject) { })
        const mockGetAllDomainsPostsAPI = jest.fn();
        const mockGetDomainTypes = jest.fn()
        const mockGetDomainRelatedTags = jest.fn();
        const mockDomainId = 1;
      
        mockGetAllDomainsPostsAPI.mockReturnValue(mockLoadingPromise)
        dashboardService.getAllDomainsPostsAPI = mockGetAllDomainsPostsAPI

        mockGetDomainTypes.mockReturnValue(mockLoadingPromise);
        dashboardService.domainTypesAPI = mockGetDomainTypes

        mockGetDomainRelatedTags.mockReturnValue(mockLoadingPromise)
        dashboardService.getDomainRelatedTags = mockGetDomainRelatedTags
        
        dashboardStore.getAllDomainsPosts();
        expect(dashboardStore.postsListAPIStatus).toBe(API_FETCHING);

        dashboardStore.getDomainTypes();
        expect(dashboardStore.domainsListAPIStatus).toBe(API_FETCHING);

        dashboardStore.createDomainTags(mockDomainId);
        expect(dashboardStore.domainTagsListAPIStatus).toBe(API_FETCHING);
    })

    it('should test dashboard store  getAllDomainsPosts and getDomainTypes in success state', async () => {

        const mockDomainId = 1;
        await dashboardStore.getAllDomainsPosts();
        expect(dashboardStore.postsListAPIStatus).toBe(API_SUCCESS);
        await dashboardStore.getDomainTypes();
        expect(dashboardStore.domainsListAPIStatus).toBe(API_SUCCESS);
        await dashboardStore.createDomainTags(mockDomainId);
        expect(dashboardStore.domainTagsListAPIStatus).toBe(API_SUCCESS);
    })

    it('should test dashboard store  getAllDomainsPosts and getDomainTypes in failure state', async () => {

        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error('error'))
        })

        const mockGetDomainRelatedTags = jest.fn();
        const mockDomainId = 1;
        const mockGetAllDomainsPostsAPI = jest.fn();
        const mockGetDomainTypes = jest.fn()

        mockGetAllDomainsPostsAPI.mockReturnValue(mockFailurePromise)
        dashboardService.getAllDomainsPostsAPI = mockGetAllDomainsPostsAPI

        mockGetDomainTypes.mockReturnValue(mockFailurePromise);
        dashboardService.domainTypesAPI = mockGetDomainTypes;

        mockGetDomainRelatedTags.mockReturnValue(mockFailurePromise)
        dashboardService.getDomainRelatedTags = mockGetDomainRelatedTags

        await dashboardStore.getAllDomainsPosts();
        expect(dashboardStore.postsListAPIStatus).toBe(API_FAILED);
        expect(dashboardStore.postListAPIError).toBe('error')


        await dashboardStore.getDomainTypes();
        expect(dashboardStore.domainsListAPIStatus).toBe(API_FAILED);
        expect(dashboardStore.domainsListAPIError).toBe('error')

        await dashboardStore.createDomainTags(mockDomainId);
        expect(dashboardStore.domainTagsListAPIStatus).toBe(API_FAILED);
        expect(dashboardStore.domainTagsListAPIError).toBe('error')
    })


    it('should test dashboard store setting following Domains', async () => {
        const mockGetDomainTypes = jest.fn()
        const mockFollowingDomains = domainTypes.following_domains.map(domain => {
            return {
                domainName: domain.domain_name,
                domainId: domain.domain_id
            }
        })

        await dashboardStore.getDomainTypes();

        expect(dashboardStore.domainsListAPIStatus).toBe(API_SUCCESS);
        expect(dashboardStore.followingDomains).toStrictEqual(mockFollowingDomains);
    })




    it('should test dashboard store setting pendingForReviews', async() => {

        const mockGetDomainTypes = jest.fn()
        const mockPendingForReviews = domainTypes.pending_for_review.map(domain => {
            return {
                domainId: domain.domain_id,
                domainName: domain.domain_name,
                pendingCount: domain.count
            }
        })
        await dashboardStore.getDomainTypes();

        expect(dashboardStore.domainsListAPIStatus).toBe(API_SUCCESS);
        expect(dashboardStore.pendingForReview).toStrictEqual(mockPendingForReviews);
    })

    it('should test dashboard store  setting suggestedDomains',async () => {

       
        const mockSuggestedDomains = domainTypes.remaining_domains.map(domain => {
            return {
                domainId: domain.domain_id,
                domainName: domain.domain_name,
                isRequested: domain.follow_requested
            }
        })
     

        await dashboardStore.getDomainTypes();

        expect(dashboardStore.domainsListAPIStatus).toBe(API_SUCCESS);
        expect(dashboardStore.suggestedDomains).toStrictEqual(mockSuggestedDomains);
    })
    it('should clear current Domain id in store',()=>{
        dashboardStore.clearCurrentDomainId();
        expect(dashboardStore.currentDomainId).toStrictEqual("")
    })
    it('should create domain model',()=>{

         const mockDomainId = 3;
      
         dashboardStore.createDomainModelObj(mockDomainId);

         expect(dashboardStore.currentDomainId).toBe(mockDomainId);
         expect(dashboardStore.domainModel.domainId).toBe(mockDomainId);      
    })

})

