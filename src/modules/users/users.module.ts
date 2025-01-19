// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { User } from './entities/user.entity'

// Controllers
import { UsersController } from './controllers/users.controller'

// Services
import { UsersService } from './services/users.service'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
