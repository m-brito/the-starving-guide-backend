// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { Biome } from './entities/biome.entity'

// Controllers
import { BiomesController } from './controllers/biomes.controller'

// Services
import { BiomesService } from './services/biomes.service'

@Module({
  imports: [TypeOrmModule.forFeature([Biome])],
  providers: [BiomesService],
  controllers: [BiomesController]
})
export class BiomesModule {}
