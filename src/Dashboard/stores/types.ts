export interface TagModel {
  tagId: number
  tagName: string
}

export interface TagObject {
  tag_id: number;
  tag_name: string
}
export interface user {
  user_id: number
  name: string
  profile_pic: string
}
export interface DomainObject {
  domain_name: string
  domain_id: number
}

export interface DomainIdName {
  domain_name: string
  domain_id: number
}
export interface ApprovedBy extends DomainObject {
  user_id: number
  name: string
}
export interface ReplyObject {
  reply_id: number
  replied_by: user
  replied_at: string
  reply_content: string
}
export interface CommentObject {
  comment_id: 1
  commented_by: user
  commented_at: string
  approved_by: ApprovedBy
  comment_content: string
  reactions_count: number
  replies_count: number
  replies: ReplyObject[]
  is_user_reacted: boolean
}
export interface PostObject {
  post_id: number
  creater: user
  created_at: string
  title: string
  post_content: string
  domain: DomainIdName
  tags: TagObject[]
  reactions_count: number
  is_user_reacted: boolean
  comments_count: number
  answer: CommentObject
  comments: CommentObject[]
}

export interface DomainTags {
  tagName: string
  tagId: number
}

export interface FollowingDomain extends DomainObject {

}

export interface PendingForReview extends DomainObject {
  count: number
}

export interface SuggestedDomains extends DomainObject {
  follow_requested: boolean
}

export interface DomainTypes {

  following_domains: DomainObject[]

  remaining_domains: SuggestedDomains[]
  total_pending_coutn: number
  pending_for_review: PendingForReview[]

}
export interface RequestedUser {
  request_id: number

  user_id: number

  name: string

}

export interface DomianDescriptionObject {
  domain_name: string

  description: string
  domain_experts: user[]

  pending_for_review_count: number

  pending_for_review: PendingForReview[]

  members: number

  total_posts_count: number

  stars_count: number

  total_requests_count: number

  requests: RequestedUser[]

  is_user_following: boolean
}