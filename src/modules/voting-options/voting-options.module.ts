// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { VotingOption } from './entities/voting-option.entity'

// Controllers
import { VotingOptionsController } from './controllers/voting-options.controller'

// Services
import { VotingOptionsService } from './services/voting-options.service'

@Module({
  imports: [TypeOrmModule.forFeature([VotingOption])],
  providers: [VotingOptionsService],
  controllers: [VotingOptionsController]
})
export class VotingOptionsModule {}
