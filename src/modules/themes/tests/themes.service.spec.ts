import { Test, TestingModule } from '@nestjs/testing'
import { ThemesService } from '@themes/services/themes.service'

describe('ThemesService', () => {
  let service: ThemesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemesService]
    }).compile()

    service = module.get<ThemesService>(ThemesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
