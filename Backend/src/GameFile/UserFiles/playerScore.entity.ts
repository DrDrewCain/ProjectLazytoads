import { Entity, Column, PrimaryGeneratedColumn, getConnection } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  playerId!: number;

  @Column()
  score?: number;

  public static async saveHighScore(playerId: number, score: number): Promise<void> {
    const connection = getConnection();
    const scoreRepository = connection.getRepository(Score);
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
