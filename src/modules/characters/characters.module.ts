// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { Character } from './entities/character.entity'

// Controllers
import { CharactersController } from './controllers/characters.controller'

// Services
import { CharactersService } from './services/characters.service'

@Module({
  imports: [TypeOrmModule.forFeature([Character])],
  providers: [CharactersService],
  controllers: [CharactersController]
})
export class CharactersModule {}
