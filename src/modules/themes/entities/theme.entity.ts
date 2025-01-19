// External Libraries
import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

// Entities
import { User } from '@users/entities/user.entity'
import { Voting } from '@votings/entities/voting.entity'

@Entity('themes')
export class Theme {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => User, user => user.themes, {
    nullable: true,
    onDelete: 'SET NULL'
  })
  user: User

  @OneToMany(() => Voting, voting => voting.theme)
  votings: Voting[]
}
