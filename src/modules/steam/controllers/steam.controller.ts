/* eslint-disable @typescript-eslint/no-unused-vars */
// External Libraries
import { Get, UseGuards, Controller } from '@nestjs/common'

// Auth
import { JwtAuthGuard } from 'src/auth/guards'
import { CurrentUser } from 'src/auth/decorators'

// Dtos
import { SteamPlayerDto } from '../dtos/friendSummarieDto'

// Services
import { UserLoggedDto } from 'src/auth/dto'
import { SteamService } from '../services/steam.service'

@Controller('steam')
@UseGuards(JwtAuthGuard)
export class SteamController {
  constructor(private readonly steamService: SteamService) {}

  @Get('get-friends')
  findOne(@CurrentUser() user: UserLoggedDto): Promise<SteamPlayerDto[]> {
    return this.steamService.findFriends(user)
  }
}
