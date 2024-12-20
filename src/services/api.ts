import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_SERVER_URL,
  cache: new InMemoryCache(),
})