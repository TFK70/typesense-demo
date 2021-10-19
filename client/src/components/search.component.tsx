import React        from 'react'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

const Search = () => {
  const [search, setSearch] = useState('')

  const SEARCH_BOOK = gql`
    query searchBook($query: String!) {
      book(query: $query) {
        name
        author
      }
    }
  `

  const { data, error } = useQuery(SEARCH_BOOK, { variables: { query: search } })

  if (error) throw new Error(error.message)

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {data?.book.map((book) => (
          <li>
            {book?.name} and {book?.author}
          </li>
        ))}
      </ul>
    </>
  )
}

export { Search }
