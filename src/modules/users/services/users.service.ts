// External Libraries
import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

// Entities
import { User } from 'src/modules/users/entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id })
  }

  create(user: Partial<User>): Promise<User> {
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
