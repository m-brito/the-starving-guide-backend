import { Test, TestingModule } from '@nestjs/testing'
import { VotingOptionsController } from './voting-options.controller'

describe('VotingOptionsController', () => {
  let controller: VotingOptionsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VotingOptionsController]
    }).compile()

    controller = module.get<VotingOptionsController>(VotingOptionsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
