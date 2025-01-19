import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './modules/users/users.module'
import { ThemesModule } from './modules/themes/themes.module'
import { VotingsModule } from './modules/votings/votings.module'
import { VotingOptionsModule } from './modules/voting-options/voting-options.module'
import { CharactersModule } from './modules/characters/characters.module'
import { FoodsModule } from './modules/foods/foods.module'
import { PlacesModule } from './modules/places/places.module'
import { ItemsModule } from './modules/items/items.module'
import { SeasonsModule } from './modules/seasons/seasons.module'
import { MobTypesModule } from './modules/mob-types/mob-types.module'
import { MobsModule } from './modules/mobs/mobs.module'
import { VotesModule } from './modules/votes/votes.module'
import { BiomesModule } from './modules/biomes/biomes.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true, // Tirar em prod
      ssl: {
        rejectUnauthorized: false // Aceita certificados autoassinados
      }
    }),
    UsersModule,
    ThemesModule,
    VotingsModule,
    VotingOptionsModule,
    CharactersModule,
    FoodsModule,
    PlacesModule,
    ItemsModule,
    BiomesModule,
    SeasonsModule,
    MobTypesModule,
    MobsModule,
    VotesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
