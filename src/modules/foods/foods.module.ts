// External Libraries
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entities
import { Food } from './entities/food.entity'

// Controllers
import { FoodsController } from './controllers/foods.controller'

// Services
import { FoodsService } from './services/foods.service'

@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  providers: [FoodsService],
  controllers: [FoodsController]
})
export class FoodsModule {}
