import { MobTypesService } from '@mob-types/services/mob-types.service'
import { Test, TestingModule } from '@nestjs/testing'

describe('MobTypesService', () => {
  let service: MobTypesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MobTypesService]
    }).compile()

    service = module.get<MobTypesService>(MobTypesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
