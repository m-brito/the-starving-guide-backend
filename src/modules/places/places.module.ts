// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { Place } from './entities/place.entity'

// Controllers
import { PlacesController } from './controllers/places.controller'

// Services
import { PlacesService } from './services/places.service'

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [PlacesService],
  controllers: [PlacesController]
})
export class PlacesModule {}
