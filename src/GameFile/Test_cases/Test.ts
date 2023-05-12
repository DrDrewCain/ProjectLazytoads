import { createConnection, Connection } from 'typeorm';
import { Player } from '../UserFiles/player.Entity';

describe('Player Entity', () => {
  let connection: Connection;

  beforeAll(async () => {
    connection = await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'test',
      entities: [Player],
      synchronize: true,
    });
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a new player', async () => {
    const player = new Player();
    player.name = 'John Doe';
    player.score = 100;

    const result = await connection.manager.save(player);

    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
    expect(result.name).toBe('John Doe');
    expect(result.score).toBe(100);
  });
});
