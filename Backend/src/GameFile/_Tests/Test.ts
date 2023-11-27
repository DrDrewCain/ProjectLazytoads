import { BeforeRecover, EntityManager } from 'typeorm';
import { Player } from '../UserFiles/player.entity';
import { appDataSource } from '../GameFile/serverStarter';
import { playerType } from '../UserFiles/playerType';

describe('Player Entity', async () => {
    let connection = await EntityManager.getDataSource().initialize();

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