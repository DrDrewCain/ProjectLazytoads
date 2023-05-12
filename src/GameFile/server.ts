import { ApolloServer } from 'apollo-server';
import { createConnection, Connection } from 'typeorm';
import typeDefs from './Utils/typeDefs';
import resolvers from './Utils/resolvers';

const appDataSource: {
  connection: Connection | undefined;
  initialize: () => Promise<void>;
} = {
  connection: undefined,
  initialize: async () => {
    appDataSource.connection = await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT!) : 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    });
  },
};

interface Context {
  connection: Connection;
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (): Promise<Context> => {
    await appDataSource.initialize();
    const connection = appDataSource.connection!;
    return { connection };
  },
});


server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});


export { appDataSource };