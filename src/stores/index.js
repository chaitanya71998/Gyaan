import { authSignInStore } from "../authentication/stores";


export default {
authSignInStore,
}
/*

---------- Forwarded message ---------
From: ROCKING RGUKTIANS <geethakogara@gmail.com>
Date: Wed, 27 May 2020, 7:36 pm
Subject:
To: <chaitanyasai1@gmail.com>


domains


{
  "user_domains": [
    {
      "domain_name": "ui/ux",
      "domain_id": 1
    }
  ],
  "remaining_domains": [
    {
      "domain_name": "django",
      "domain_id": 2,
      "is_following": false
    }
  ],
  "your_pendings_count": 2,
  "your_pendings": [{
    "domain_name": "javascript",
    "domain_id": 3,
    "count": 2
  },
  {"domain_name": "react",
    "domain_id": 6,
    "count": 1
  }],
  "pending_reviews_count":4,
  "pending_reviews": {
    "domain_name": "django",
    "domain_id": 5,
    "count": 2
  },
  {"domain_name": "3d editing",
    "domain_id": 8,
    "count": 2
  }
}

posts :
[
  {
    "post_id": 1,
    "creater": {
      "user_id": 1,
      "name": "abc",
      "profile_pic": ""
    },
    post_content:"post content"
    "created_at": "datetime",
    "title": "xyz",
    "domain": {
      "domain_name": "ui/ux",
      "domain_id": 1
    },
    "tags": [
      {
        "tagname": "ui discuss",
        "tag_id": 1
      },
      {
        "tagname": "ui solver",
        "tag_id": 2
      }
    ],
    "reactions_count": 10,
    "comments_count": 10,
    "answer": [
      {
        "comment_id": 4,
        "commented_by": {
          "user_id": 3,
          "name": "four",
          "profile_pic": ""
        },
        "commented_at": "datetime",
        "comment_content": "the answer post",
        "reactions_count": 3,
        "replies_count": 1,
        "replies": [
          {
            "reply_id": 1,
            "replied_by": {
              "user_id": 2,
              "name": "six",
              "profile_pic": ""
            },
            "replied_at": "datetime",
            "reply_content": "reply data"
          }
        ]
      }
    ],
    "comments": [
      {
        "comment_id": 2,
        "commented_by": {
          "user_id": 2,
          "name": "tris",
          "profile_pic": ""
        },
        "commented_at": "datetime",
        "comment_content": "comment",
        "reactions_count": 2,
        "replies_count": 1,
        "replies": [
          {
            "reply_id": 4,
            "replied_by": {
              "user_id": 6,
              "name": "caleb",
              "profile_pic": ""
            },
            "replied_at": "datetime",
            "reply_content": "content"
          }
        ]
      }
    ]
  }
]
new data


{
  "user_domains": [
    {
      "domain_name": "string",
      "domain_id": 0
    }
  ],
  "remaining_domains": [
    {
      "domain_name": "string",
      "domain_id": 0,
      "follow_requested": "string"
    }
  ],
  "your_pendings_count": 0,
  "your_pendings": [
    {
      "domain_name": "string",
      "domain_id": 0,
      "count": 0
    }
  ],
  "pending_reviews_count": 0,
  "pending_reviews": [
    {
      "domain_name": "string",
      "domain_id": 0,
      "count": 0
    }
  ]
}


*/