import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

enum PlayerType {
  MAGE = 'mage',
  WARRIOR = 'warrior',
  ROGUE = 'rogue',
  SPONGEBOB = 'spongebob',
  PATRICK = 'patrick',
}

@Entity({ name: 'players' })
export class Player {

  @PrimaryGeneratedColumn()
  @Unique(["id"])
  id!: number;

  @Column()
  type!: PlayerType;

  @Column()
  userName!: string;

  @Column()
  name?: string;

  @Column()
  score?: number;
  
  
  @Column()
  health!: number;

  @Column()
  might!: number;

  @Column()
  intelligence!: number;

  @Column()
  magic!: number;

  @Column()
  charisma!: number;

  @Column()
  luck!: number;

  @Column()
  badDogAttitude!: number;

  @Column({ nullable: true })
  likeness?: boolean;
}

export default Player;