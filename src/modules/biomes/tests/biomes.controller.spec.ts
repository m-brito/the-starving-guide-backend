import { Test, TestingModule } from '@nestjs/testing'
import { BiomesController } from '../controllers/biomes.controller'

describe('BiomesController', () => {
  let controller: BiomesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiomesController]
    }).compile()

    controller = module.get<BiomesController>(BiomesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
