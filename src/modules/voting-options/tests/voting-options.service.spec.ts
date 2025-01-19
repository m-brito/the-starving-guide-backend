import { Test, TestingModule } from '@nestjs/testing'
import { VotingOptionsService } from './voting-options.service'

describe('VotingOptionsService', () => {
  let service: VotingOptionsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VotingOptionsService]
    }).compile()

    service = module.get<VotingOptionsService>(VotingOptionsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
