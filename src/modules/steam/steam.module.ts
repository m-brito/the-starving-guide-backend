import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'

// Controllers
import { SteamController } from './controllers/steam.controller'

// Services
import { SteamService } from './services/steam.service'

// Entities
import { User } from '@users/entities/user.entity'

// Repositories
import { UsersRepository } from '@users/repositories/users.repository'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [SteamController],
  providers: [
    SteamService,
    {
      provide: UsersRepository,
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(User).extend(UsersRepository.prototype),
      inject: [DataSource]
    }
  ],
  exports: [SteamService]
})
export class SteamModule {}
