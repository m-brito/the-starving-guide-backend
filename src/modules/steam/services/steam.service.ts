// External Libraries
import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common'

// Services
import { getFriends } from '@services/steam/isteamuser.getplayersummaries.v2.get'
import { getFriendsSummaries } from '@services/steam/isteamuser.getfriendlist.v1.get'

// Dtos
import { UserLoggedDto } from 'src/auth/dto'
import { HttpResponse } from '@services/steam/isteamuser.getfriendlist.v1.get/response'

// Repositories
import { UsersRepository } from '@users/repositories/users.repository'

@Injectable()
export class SteamService {
  private readonly logger = new Logger(SteamService.name)

  constructor(private readonly userRepository: UsersRepository) {}

  async findFriends(userLogged: UserLoggedDto): Promise<HttpResponse> {
    const user = await this.getUseById(userLogged.userId)
    const steamFriends = await this.fetchSteamFriends(user.steamId)
    return await this.fetchFriendsSummaries(steamFriends)
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

      return friends.friendslist.friends.map(friend => friend.steamid).join(',')
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
