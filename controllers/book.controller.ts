import { Controller }  from '@nestjs/common'
import { Get }         from '@nestjs/common'
import { Param }       from '@nestjs/common'

import { BookService } from '../services'

@Controller('book')
class BookController {
  constructor(private bookService: BookService) {}

  @Get('all')
  findAll() {
    this.bookService.findAll().catch((e) => {
      throw new Error(e)
    })
  }

  @Get('create')
  createBooks() {
    this.bookService.createBook().catch((e) => {
      throw new Error(e)
    })
  }

  @Get('init-collection')
  initCollection() {
    this.bookService.initCollection().catch((e) => {
      throw new Error(e)
    })
  }

  @Get(':query')
  async findExact(@Param('query') query: string) {
    return this.bookService.findExact(query).catch((e) => {
      throw new Error(e)
    })
  }
}

export { BookController }
