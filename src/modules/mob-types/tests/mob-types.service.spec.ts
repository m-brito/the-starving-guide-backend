import { Test, TestingModule } from '@nestjs/testing'
import { MobTypesService } from './mob-types.service'

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
