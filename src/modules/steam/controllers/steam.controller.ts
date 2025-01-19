/* eslint-disable @typescript-eslint/no-unused-vars */
// External Libraries
import { Get, UseGuards, Controller } from '@nestjs/common'

// Auth
import { JwtAuthGuard } from 'src/auth/guards'
import { CurrentUser } from 'src/auth/decorators'

// Dtos
import { HttpResponse } from '@services/steam/isteamuser.getfriendlist.v1.get/response'

// Services
import { UserLoggedDto } from 'src/auth/dto'
import { SteamService } from '../services/steam.service'

@Controller('steam')
@UseGuards(JwtAuthGuard)
export class SteamController {
  constructor(private readonly steamService: SteamService) {}

  @Get('get-friends')
  findOne(@CurrentUser() user: UserLoggedDto): Promise<HttpResponse> {
    return this.steamService.findFriends(user)
  }
}
