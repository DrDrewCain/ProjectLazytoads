import { EntityManager, createConnection } from 'typeorm';
import { Player } from '../UserFiles/player.entity';

describe('Player Entity', () => {
  let connection: EntityManager;

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

    await connection.save(player);

    expect(player).toBeDefined();
    expect(player.id).toBeDefined();
    expect(player.name).toBe('John Doe');
    expect(player.score).toBe(100);
  });
});