"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
  type User {
    id: ID!
    username: String!
    password: String!
  }

  type PostalCode {
    postal_code: String!
    city: String!
    province_abbr: String!
    time_zone: Int!
    latitude: Float!
    longitude: Float!
  }

  type LmiaRequest {
    province_territory: String!
    program_stream: String!
    employer_name: String!
    employer_address: String!
    occupation: String!
    incorporate_status: String!
    number_of_requested_lmia: Int!
    number_of_requested_positions: Int!
    year: Int!
    quarter: Int!
  }

  type Query {
    hello: String
    numberSix: Int! # Should always return the number 6 when queried
    numberSeven: Int! # Should always return 7
    postalCodes: [PostalCode]
    postalCode(postalCode: String!): [PostalCode]
  }

  type Mutation {
    register(username: String!, password: String!): User
    login(username: String!, password: String!): User
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map