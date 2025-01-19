// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { Item } from './entities/item.entity'

// Controllers
import { ItemsController } from './controllers/items.controller'

// Services
import { ItemsService } from './services/items.service'

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemsService],
  controllers: [ItemsController]
})
export class ItemsModule {}
