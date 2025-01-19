// External Libraries
import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common'

// Services
import { getFriendsSummaries } from '@services/steam/isteamuser.getplayersummaries.v2.get'
import { getFriends } from '@services/steam/isteamuser.getfriendlist.v1.get'

// Utils
import { toFriendSummarieDto } from '../mappers'

// Dtos
import { UserLoggedDto } from 'src/auth/dto'
import { SteamPlayerDto } from '../dtos/friendSummarieDto'

// Repositories
import { UsersRepository } from '@users/repositories/users.repository'

@Injectable()
export class SteamService {
  private readonly logger = new Logger(SteamService.name)

  constructor(private readonly userRepository: UsersRepository) {}

  async findFriends(userLogged: UserLoggedDto): Promise<SteamPlayerDto[]> {
    // console.log(JSON.stringify(friendsSummaries, null, 2))
    const user = await this.getUseById(userLogged.userId)
    const steamFriends = await this.fetchSteamFriends(user.steamId)
    const friendsSummaries = await this.fetchFriendsSummaries(steamFriends)
    return friendsSummaries?.response?.players?.map(friend => {
      return toFriendSummarieDto(friend)
    })
  }

  private async getUseById(userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } })

    if (!user || !user.steamId) {
      throw new HttpException(
        'User not synced with Steam',
        HttpStatus.BAD_REQUEST
      )
    }

    return user
  }

  private async fetchSteamFriends(steamId: string) {
    const payload = { steamid: steamId }

    try {
      const friends = await getFriends(payload)

      if (!friends?.friendslist?.friends) {
        throw new HttpException(
          'Could not find any friends',
          HttpStatus.NOT_FOUND
        )
      }

      return friends?.friendslist?.friends
        .map(friend => friend?.steamid)
        .join(',')
    } catch (error) {
      this.logger.error('Error fetching Steam friends', error.stack)
      throw new HttpException(
        'Failed to fetch friends from Steam',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  private async fetchFriendsSummaries(steamIds: string) {
    try {
      const payload = { steamIds }
      return await getFriendsSummaries(payload)
    } catch (error) {
      this.logger.error('Error fetching friends summaries', error.stack)
      throw new HttpException(
        'Failed to fetch friends summaries',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }
}
