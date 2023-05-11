import { ApolloServer } from 'apollo-server';
import { Pool } from 'pg';
import typeDefs from './Utils/typeDefs';
import resolvers from './resolvers';

const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // change to the correct port number if necessary
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ pool }), // pass the pool instance to the context object
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
