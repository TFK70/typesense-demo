import { Resolver }    from '@nestjs/graphql'
import { Args }        from '@nestjs/graphql'
import { Query }       from '@nestjs/graphql'

import { Book }        from './book.model'
import { BookService } from '../services'

@Resolver((of) => Book)
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query((returns) => [Book])
  async book(@Args('query') query: string) {
    return this.bookService.findExact(query)
  }
}
