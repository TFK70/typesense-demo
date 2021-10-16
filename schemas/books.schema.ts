const booksSchema = {
  name: 'books',
  defaultSortingField: 'name',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'author', type: 'string' },
  ],
}

export { booksSchema }
