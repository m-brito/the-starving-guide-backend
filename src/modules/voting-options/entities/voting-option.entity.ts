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
import { Voting } from '@votings/entities/voting.entity'

@Entity('voting_options')
export class VotingOption {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  image: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Voting, voting => voting.options, { onDelete: 'CASCADE' })
  voting: Voting
}
