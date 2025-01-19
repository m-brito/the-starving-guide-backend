// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { Vote } from './entities/vote.entity'

// Controllers
import { VotesController } from './controllers/votes.controller'

// Services
import { VotesService } from './services/votes.service'

@Module({
  imports: [TypeOrmModule.forFeature([Vote])],
  providers: [VotesService],
  controllers: [VotesController]
})
export class VotesModule {}
