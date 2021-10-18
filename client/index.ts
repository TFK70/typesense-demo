const { ApolloClient, gql } = require('@apollo/client')

const searchInput = document.getElementById('search')
const searchButton = document.getElementById('search__button')
const resultsList = document.getElementById('results__list')

const client = new ApolloClient({
  uri: 'http://localhost:4000',
})

const SEARCH_BOOK = gql`
  query searchBook($query: String!) {
    book(query: $query) {
      name
      author
    }
  }
`

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
}

const renderResponse = (res) => {
  console.log('resp', res)
}

const query = (payload) => {
  client
    .query({ query: SEARCH_BOOK })
    .then(renderResponse)
    .catch((e) => {
      throw new Error(e)
    })
}

const onSearch = () => {
  query((searchInput as any).value)
}

searchButton.addEventListener('click', onSearch)
