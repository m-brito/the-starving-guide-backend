export interface HttpResponse {
  friendslist: {
    friends: Friend[]
  }
}

export interface Friend {
  steamid: string
  relationship: string
  friend_since: number
}
