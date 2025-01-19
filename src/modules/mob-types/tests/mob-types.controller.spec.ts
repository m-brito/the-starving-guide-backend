import { Test, TestingModule } from '@nestjs/testing'
import { MobTypesController } from './mob-types.controller'

describe('MobTypesController', () => {
  let controller: MobTypesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobTypesController]
    }).compile()

    controller = module.get<MobTypesController>(MobTypesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
