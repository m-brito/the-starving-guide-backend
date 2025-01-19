// Services
import { API_STEAM } from 'src/services/api'

// Types
import { HttpResponse } from './response'
import { HttpGetFriendsParams } from './request'

export async function getFriendsSummaries(params: HttpGetFriendsParams) {
  const { steamIds } = params
  const payload = {
    steamids: steamIds,
    key: process.env.STEAM_API_KEY
  }

  const url = 'ISteamUser/GetPlayerSummaries/v2/'

  const response = await API_STEAM.get<HttpResponse>(url, { params: payload })
  return response.data
}
