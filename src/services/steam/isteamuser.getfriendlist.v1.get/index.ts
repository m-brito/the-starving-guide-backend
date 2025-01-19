// Services
import { API_STEAM } from 'src/services/api'

// Types
import { HttpResponse } from './response'
import { HttpGetFriendsParams } from './request'

export async function getFriends(params: HttpGetFriendsParams) {
  const { steamid } = params
  const payload = {
    steamid: steamid,
    key: process.env.STEAM_API_KEY
  }

  const url = 'ISteamUser/GetFriendList/v1/'

  const response = await API_STEAM.get<HttpResponse>(url, { params: payload })
  return response.data
}
