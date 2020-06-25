import { DomainTypes, TagObject, PostObject, DomianDescriptionObject } from "../../stores/types";

export interface DashboardService {
    domainTypesAPI: (requestObject: {}) => Promise<DomainTypes>

    getDomainRelatedTags: (domainId: number) => Promise<TagObject[]>

    getAllDomainsPostsAPI: () => Promise<PostObject[]>

    domainDescriptionAPI: (id: number) => Promise<DomianDescriptionObject>

    domainPostsAPI: (domainId: number) => Promise<PostObject[]>

    getPostReactionStatus: (postId: number) => Promise<{}>

    getCommentReactionStatus: (commentId: number) => Promise<{}>
}