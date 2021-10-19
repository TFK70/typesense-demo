import React              from 'react'
import { ApolloClient }   from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { InMemoryCache }  from '@apollo/client'

import { Search }         from '../components'

const Index = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <Search />
    </ApolloProvider>
  )
}

export default Index
