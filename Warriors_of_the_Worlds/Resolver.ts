import { ApolloServer, gql } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import { jsonfile } from 'jsonfile';
import { connect } from 'pg';

// Load the JSON file
const data = jsonfile.readFileSync('./players.json');

// Define your type definitions
const typeDefs = gql`
  type Query {
    players: [Player]
  }
    
  type Player {
    id: Int
    type: String
    userName: String
    health: Int
    strength: {
      might: Int
      intelligence: Int
      magic: Int
      charisma: Int
      luck: Int
      badDogAttitude: Int
    }
    likeness: Boolean
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    players: () => data.players
  }
};

// Create the schema using makeExecutableSchema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Create a PostgreSQL connection
const connection = connect('postgres://localhost:5432/mydb');

// Create an Apollo server
const server = new ApolloServer({
  schema,
  context: {
    connection
  }
});

// Start the server
server.listen(4000, () => {
  console.log('Server running on port 4000');
});
