// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { MobType } from './entities/mob-type.entity'

// Controllers
import { MobTypesController } from './controllers/mob-types.controller'

// Services
import { MobTypesService } from './services/mob-types.service'

@Module({
  imports: [TypeOrmModule.forFeature([MobType])],
  providers: [MobTypesService],
  controllers: [MobTypesController]
})
export class MobTypesModule {}
