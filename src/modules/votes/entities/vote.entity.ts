// External Libraries
import { Entity, CreateDateColumn, PrimaryColumn, ManyToOne } from 'typeorm'

// Entities
import { User } from '@users/entities/user.entity'
import { Voting } from '@votings/entities/voting.entity'
import { VotingOption } from '@voting-options/entities/voting-option.entity'

@Entity('votes')
export class Vote {
  @PrimaryColumn()
  user_id: number

  @PrimaryColumn()
  voting_id: number

  @PrimaryColumn()
  voting_option_id: number

  @CreateDateColumn()
  vote_date_time: Date

  @ManyToOne(() => User, user => user.id, { onDelete: 'CASCADE' })
  user: User

  @ManyToOne(() => Voting, voting => voting.id, { onDelete: 'CASCADE' })
  voting: Voting

  @ManyToOne(() => VotingOption, option => option.id, { onDelete: 'CASCADE' })
  votingOption: VotingOption
}
