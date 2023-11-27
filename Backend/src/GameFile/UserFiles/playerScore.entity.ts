import { Entity, Column, PrimaryGeneratedColumn, Connection, } from 'typeorm';
import { appDataSource } from '../serverStarter';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  playerId!: number;

  @Column()
  score?: number;

  public static async saveHighScore(playerId: number, score: number): Promise<void> {
    const scoreRepository = appDataSource.connection(Score);
    const existingScore = await scoreRepository.findOne({ where: { playerId } });

    if (existingScore) {
      if (score > existingScore.score!) {
        existingScore.score = score;
        await scoreRepository.save(existingScore);
      }
    } else {
      const newScore = new Score();
      newScore.playerId = playerId;
      newScore.score = score;
      await scoreRepository.save(newScore);
    }
  }
}
