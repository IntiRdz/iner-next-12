import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'https://inspira-iner-server-a98ddf825333.herokuapp.com/graphql',
    //uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;