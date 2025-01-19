// External Libraries
import {
  Entity,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

// Entities
import { User } from '@users/entities/user.entity'

@Entity('biomes')
export class Biome {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ nullable: true })
  image: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => User, user => user.biomes, {
    nullable: true,
    onDelete: 'SET NULL'
  })
  user: User
}
