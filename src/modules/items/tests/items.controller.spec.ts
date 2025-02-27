import { ItemsController } from 'src/modules/items/controllers/items.controller'
import { Test, TestingModule } from '@nestjs/testing'

describe('ItemsController', () => {
  let controller: ItemsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController]
    }).compile()

    controller = module.get<ItemsController>(ItemsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
