import { FoodsService } from '@foods/services/foods.service'
import { Test, TestingModule } from '@nestjs/testing'

describe('FoodsService', () => {
  let service: FoodsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodsService]
    }).compile()

    service = module.get<FoodsService>(FoodsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
