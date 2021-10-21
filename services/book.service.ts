/* eslint-disable max-classes-per-file */

import { Injectable }                from '@nestjs/common'
import { InjectRepository }          from '@nestjs/typeorm'
import { TypesenseMetadataRegistry } from '@atls/nestjs-typesense'
import { Repository }                from 'typeorm'
import { Client }                    from 'typesense'

import { Book }                      from '../entities'
import { booksSchema }               from '../schemas'

@Injectable()
export class BookService {
  booksSchemaTarget: new (...args) => {}

  typesense: Client

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    private typesenseMetadataRegistry: TypesenseMetadataRegistry,
    private client: Client
  ) {
    this.typesense = client

    typesenseMetadataRegistry.addSchema(Book, booksSchema)
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find()
  }

  async createBook() {
    const book = this.bookRepository.create()
    book.name = 'Stub name'
    book.author = 'Stub author'
    await this.bookRepository.save(book)
  }

  async initCollection() {
    const names = ['alpha', 'beta', 'omega']
    const authors = ['ahpla', 'ateb', 'agemo']

    const books = names.reduce(
      (result, name, idx) => [...result, { name, author: authors[idx] }],
      []
    )

    books.forEach((book) => {
      this.typesense.collections('books').documents().create(book)
    })
  }

  async findExact(query): Promise<Book[]> {
    const searchParams = {
      q: query,
      query_by: 'name',
    }
    return this.typesense
      .collections('books')
      .documents()
      .search(searchParams)
      .then((result) => result?.hits?.map((hit) => hit.document))
  }
}
