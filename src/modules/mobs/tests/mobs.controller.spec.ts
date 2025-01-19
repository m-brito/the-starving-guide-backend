import { MobsController } from '@mobs/controllers/mobs.controller'
import { Test, TestingModule } from '@nestjs/testing'

describe('MobsController', () => {
  let controller: MobsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobsController]
    }).compile()

    controller = module.get<MobsController>(MobsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
