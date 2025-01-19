import { Test, TestingModule } from '@nestjs/testing'
import { VotingsController } from './votings.controller'

describe('VotingsController', () => {
  let controller: VotingsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VotingsController]
    }).compile()

    controller = module.get<VotingsController>(VotingsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
