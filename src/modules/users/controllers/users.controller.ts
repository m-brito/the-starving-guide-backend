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
  Request
} from '@nestjs/common'

// Auth
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'

// Entities
import { User } from 'src/modules/users/entities/user.entity'

// Services
import { UsersService } from 'src/modules/users/services/users.service'

// Dtos
import { CreateUserDto } from '@users/dtos/create-user.dto'
import { UserDto } from '@users/dtos/user.dto'

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Request() req): Promise<UserDto[]> {
    const loggedUser = req.user
    return this.usersService.findAll(loggedUser)
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id)
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
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
