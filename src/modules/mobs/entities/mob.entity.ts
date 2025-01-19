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
import { MobType } from '@mob-types/entities/mob-type.entity'

@Entity('mobs')
export class Mob {
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

  @ManyToOne(() => MobType, mobType => mobType.id, { onDelete: 'CASCADE' })
  mobType: MobType

  @ManyToOne(() => User, user => user.mobs, {
    nullable: true,
    onDelete: 'SET NULL'
  })
  user: User
}
