import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import { gql } from 'apollo-server';
import { pool } from '../db';
import resolvers from '../Utils/resolvers';
import typeDefs from '../schema';

describe('resolvers', () => {
  let server;
  let query;

  beforeAll(async () => {
    server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    query = createTestClient(server).query;
    await pool.query('CREATE TABLE players (id SERIAL PRIMARY KEY, name TEXT, age INT)');
  });

  afterAll(async () => {
    await pool.query('DROP TABLE players');
    await pool.end();
  });

  describe('players', () => {
    it('should return an array of players', async () => {
      const GET_PLAYERS = gql`
        query {
          players {
            id
            name
            age
          }
        }
      `;
      const { data } = await query({ query: GET_PLAYERS });
      expect(data.players).toEqual([]);
    });
  });
});
