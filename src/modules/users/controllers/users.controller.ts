/* eslint-disable @typescript-eslint/no-unused-vars */
// External Libraries
import {
  Put,
  Get,
  Body,
  Post,
  Param,
  Delete,
  UseGuards,
  Controller,
  Request,
  Query
} from '@nestjs/common'

// Auth
import { JwtAuthGuard } from 'src/auth/guards'
import { CurrentUser } from 'src/auth/decorators'

// Entities
import { User } from 'src/modules/users/entities'

// Services
import { UsersService } from 'src/modules/users/services'

// Types
import { PaginatedResult } from 'src/utils/types'

// Dtos
import { UserLoggedDto } from 'src/auth/dto'
import { UserDto } from '@users/dtos/user.dto'
import { SyncSteamDto } from '@users/dtos/sync-steam.dto'
import { CreateUserDto } from '@users/dtos/create-user.dto'

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ): Promise<PaginatedResult<UserDto>> {
    return this.usersService.findAll(Number(page), Number(limit))
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id)
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Post('sync-steam')
  async syncSteamProfile(
    @Body() syncSteamDto: SyncSteamDto,
    @CurrentUser() user: UserLoggedDto
  ) {
    return this.usersService.syncSteamProfile(user, syncSteamDto.steamId)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: Partial<User>): Promise<User> {
    return this.usersService.update(id, user)
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.usersService.delete(id)
  }
}
