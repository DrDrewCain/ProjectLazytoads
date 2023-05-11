import { gql } from 'apollo-server';
const typeDefs = gql`
  type Query {
    players: [Player]
  }

  type Mutation {
    login(userName: String): String
    logout: Boolean
  }

  type Player {
    id: Int
    type: String
    userName: String
    health: Int
    strength: PlayerStrength
    likeness: Boolean
  }

  type PlayerStrength {
    might: Int
    intelligence: Int
    magic: Int
    charisma: Int
    luck: Int
    badDogAttitude: Int
  }
`;

export default typeDefs;
