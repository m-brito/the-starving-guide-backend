// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { Season } from './entities/season.entity'

// Controllers
import { SeasonsController } from './controllers/seasons.controller'

// Services
import { SeasonsService } from './services/seasons.service'

@Module({
  imports: [TypeOrmModule.forFeature([Season])],
  providers: [SeasonsService],
  controllers: [SeasonsController]
})
export class SeasonsModule {}
