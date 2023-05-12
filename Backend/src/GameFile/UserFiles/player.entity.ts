import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { playerType } from './playerType';


@Entity({ name: 'players' })
export class Player {

  @PrimaryGeneratedColumn()
  @Unique(["id"])
  id!: number;

  @Column()
  type!: playerType;

  @Column( { type: 'string', nullable: false})
  userName!: string;

  @Column( { type: 'string', nullable: false})
  name?: string;

  @Column( { type: 'int', nullable: true})
  score?: number;
  
  
  @Column( { type: 'int', nullable: false})
  health!: number;

  @Column( { type: 'int', nullable: false})
  might!: number;

  @Column( { type: 'int', nullable: false})
  intelligence!: number;

  @Column({ type: 'int', nullable: false })
  magic!: number;

  @Column( { type: 'int', nullable: false})
  charisma!: number;

  @Column( { type: 'int', nullable: false})
  luck!: number;

  @Column( { type: 'int', nullable: false})
  badDogAttitude!: number;

  @Column({ type: 'boolean', nullable: true })
  likeness?: boolean;
}

export default Player;