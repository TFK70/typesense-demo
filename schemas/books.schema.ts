const booksSchema = {
  name: 'books',
  defaultSortingField: 'name',
  fields: [
    { name: 'id', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'author', type: 'string' },
  ],
}

export { booksSchema }
