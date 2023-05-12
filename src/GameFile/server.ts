import { ApolloServer } from 'apollo-server';
import { Pool } from 'pg';
import typeDefs from './Utils/typeDefs';
import resolvers from './Utils/resolvers';

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT!) : 5432,  
});
  

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ pool }), // pass the pool instance to the context object
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
