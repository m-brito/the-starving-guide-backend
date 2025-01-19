// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { Theme } from './entities/theme.entity'

// Controllers
import { ThemesController } from './controllers/themes.controller'

// Services
import { ThemesService } from './services/themes.service'

@Module({
  imports: [TypeOrmModule.forFeature([Theme])],
  providers: [ThemesService],
  controllers: [ThemesController]
})
export class ThemesModule {}
