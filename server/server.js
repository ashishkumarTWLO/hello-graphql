import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// what clients can request
const typeDefs  = `#graphql
    type Query {
        greeting: String
    }
`;

// how to return actual value
const resolvers = {
    Query: {
        greeting: () => 'Hello World!'
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

const info = await startStandaloneServer(server, {listen: { port: 3000 }});
console.log('Server started at ', info.url);
