import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MobsModule } from './modules/mobs/mobs.module'
import { ItemsModule } from './modules/items/items.module'
import { VotesModule } from './modules/votes/votes.module'
import { UsersModule } from './modules/users/users.module'
import { FoodsModule } from './modules/foods/foods.module'
import { BiomesModule } from './modules/biomes/biomes.module'
import { ThemesModule } from './modules/themes/themes.module'
import { PlacesModule } from './modules/places/places.module'
import { VotingsModule } from './modules/votings/votings.module'
import { SeasonsModule } from './modules/seasons/seasons.module'
import { MobTypesModule } from './modules/mob-types/mob-types.module'
import { CharactersModule } from './modules/characters/characters.module'
import { VotingOptionsModule } from './modules/voting-options/voting-options.module'
import { SteamModule } from './modules/steam/steam.module'

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
        rejectUnauthorized: false
      },
      logging: true
    }),
    MobsModule,
    AuthModule,
    FoodsModule,
    UsersModule,
    ItemsModule,
    VotesModule,
    SteamModule,
    ThemesModule,
    PlacesModule,
    BiomesModule,
    SeasonsModule,
    VotingsModule,
    MobTypesModule,
    CharactersModule,
    VotingOptionsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
