// External Libraries
import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

// Entities
import { Mob } from '@mobs/entities/mob.entity'
import { Food } from '@foods/entities/food.entity'
import { Item } from '@items/entities/item.entity'
import { Theme } from '@themes/entities/theme.entity'
import { Place } from '@places/entities/place.entity'
import { Season } from '@seasons/entities/season.entity'
import { Voting } from '@votings/entities/voting.entity'
import { MobType } from '@mob-types/entities/mob-type.entity'
import { Biome } from 'src/modules/biomes/entities/biome.entity'
import { Character } from '@characters/entities/character.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  image: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column()
  role: string

  @Column({ nullable: true })
  steamId?: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Theme, theme => theme.user)
  themes: Theme[]

  @OneToMany(() => Voting, voting => voting.user)
  votings: Voting[]

  @OneToMany(() => Character, character => character.user)
  characters: Character[]

  @OneToMany(() => Food, food => food.user)
  foods: Food[]

  @OneToMany(() => Place, place => place.user)
  places: Place[]

  @OneToMany(() => Item, item => item.user)
  items: Item[]

  @OneToMany(() => Biome, biome => biome.user)
  biomes: Biome[]

  @OneToMany(() => Season, season => season.user)
  seasons: Season[]

  @OneToMany(() => MobType, mobType => mobType.user)
  mobTypes: MobType[]

  @OneToMany(() => Mob, mob => mob.user)
  mobs: Mob[]
}
