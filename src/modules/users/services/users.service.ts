/* eslint-disable @typescript-eslint/no-unused-vars */
// External Libraries
import * as bcrypt from 'bcrypt'
import { Injectable } from '@nestjs/common'

// Auth
// import { CurrentUser } from 'src/auth/decorators/current-user.decorator'

// Mappers
import { toUserDto } from '../mappers/toUserDto'

// Entities
import { User } from 'src/modules/users/entities/user.entity'

// Repositories
import { UsersRepository } from '@users/repositories/users.repository'

// Dtos
import { UserDto } from '@users/dtos/user.dto'
import { CreateUserDto } from '@users/dtos/create-user.dto'
// import { UserLoggedDto } from 'src/auth/dto/user-logged.dto'
import { PaginatedResult } from 'src/utils/types'

@Injectable()
export class UsersService {
  constructor(
    // @InjectRepository(User)
    // private userRepository: Repository<User>
    private readonly userRepository: UsersRepository
  ) {}

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

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id)
  }
}
