const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('graphql');
const { jsonfile } = require('jsonfile');
const { connect } = require('pg');

// Load the JSON file
const data = jsonfile.readFileSync('./players.json');

// Create a GraphQL schema
const schema = makeExecutableSchema({
  typeDefs: `
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
  `,
  resolvers: {
    Query: {
      players: () => data.players
    }
  }
});

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