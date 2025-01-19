import { SteamPlayer } from '@services/steam/isteamuser.getplayersummaries.v2.get/response'
import { SteamPlayerDto } from '../dtos/friendSummarieDto'
import { toStateProfileText } from './toStateProfileText'

export function toFriendSummarieDto(friend: SteamPlayer): SteamPlayerDto {
  return {
    steamid: friend.steamid,
    profileurl: friend.profileurl,
    personaname: friend.personaname,
    avatarmedium: friend.avatarmedium,
    lastlogoff: friend.lastlogoff,
    personastate: toStateProfileText(friend.personastate),
    gameextrainfo: friend.gameextrainfo,
    realname: friend.realname
  }
}
