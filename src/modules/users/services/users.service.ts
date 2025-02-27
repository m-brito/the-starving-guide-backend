/* eslint-disable @typescript-eslint/no-unused-vars */
// External Libraries
import * as bcrypt from 'bcrypt'
import { Injectable, HttpException, HttpStatus } from '@nestjs/common'

// Utils
import { PaginatedResult } from 'src/utils/types'

// Mappers
import { toUserDto } from '../mappers/toUserDto'

// Entities
import { User } from 'src/modules/users/entities/user.entity'

// Repositories
import { UsersRepository } from '@users/repositories/users.repository'

// Dtos
import { UserLoggedDto } from 'src/auth/dto'
import { UserDto } from '@users/dtos/user.dto'
import { CreateUserDto } from '@users/dtos/create-user.dto'

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async findAll(
    page: number,
    limit: number
  ): Promise<PaginatedResult<UserDto>> {
    const skip = (page - 1) * limit
    const [users, total] = await this.userRepository.findAndCount({
      skip,
      take: limit,
      order: { created_at: 'DESC' }
    })

    return {
      data: users.map(user => toUserDto(user)),
      total,
      page,
      lastPage: Math.ceil(total / limit)
    }
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id })
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ email })
    return user
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt)

    const user = this.userRepository.create({
      ...createUserDto,
      role: 'user',
      password: hashedPassword
    })

    return this.userRepository.save(user)
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user)
    return this.findOne(id)
  }

  async syncSteamProfile(
    userLogged: UserLoggedDto,
    steamId: string
  ): Promise<UserDto> {
    const idLogged = userLogged.userId
    const user = await this.userRepository.findOneBy({ id: idLogged })
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    user.steamId = steamId
    const newUser = await this.userRepository.save(user)
    return toUserDto(newUser)
  }

  async desyncSteamProfile(userLogged: UserLoggedDto): Promise<UserDto> {
    const idLogged = userLogged.userId
    const user = await this.userRepository.findOneBy({ id: idLogged })
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    user.steamId = null
    const newUser = await this.userRepository.save(user)
    return toUserDto(newUser)
  }

  async delete(id: number): Promise<void> {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    await this.userRepository.delete(id)
  }
}
