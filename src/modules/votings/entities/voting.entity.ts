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
import { Theme } from '@themes/entities/theme.entity'
import { VotingOption } from '@voting-options/entities/voting-option.entity'

@Entity('votings')
export class Voting {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ type: 'date' })
  start_date: Date

  @Column({ type: 'date' })
  end_date: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Theme, theme => theme.votings, { onDelete: 'CASCADE' })
  theme: Theme

  @ManyToOne(() => User, user => user.votings, {
    nullable: true,
    onDelete: 'SET NULL'
  })
  user: User

  @OneToMany(() => VotingOption, option => option.voting)
  options: VotingOption[]
}
