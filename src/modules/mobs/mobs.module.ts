// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { Mob } from './entities/mob.entity'

// Controllers
import { MobsController } from './controllers/mobs.controller'

// Services
import { MobsService } from './services/mobs.service'

@Module({
  imports: [TypeOrmModule.forFeature([Mob])],
  providers: [MobsService],
  controllers: [MobsController]
})
export class MobsModule {}
