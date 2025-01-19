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

@Entity('mob_types')
export class MobType {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => User, user => user.mobTypes, {
    nullable: true,
    onDelete: 'SET NULL'
  })
  user: User
}
