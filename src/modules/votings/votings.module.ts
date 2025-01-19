// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { Voting } from './entities/voting.entity'

// Controllers
import { VotingsController } from './controllers/votings.controller'

// Services
import { VotingsService } from './services/votings.service'

@Module({
  imports: [TypeOrmModule.forFeature([Voting])],
  providers: [VotingsService],
  controllers: [VotingsController]
})
export class VotingsModule {}
