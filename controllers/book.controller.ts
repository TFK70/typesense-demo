import { Controller }     from '@nestjs/common'
import { Get }            from '@nestjs/common'

import { BookService } from '../services'

@Controller('book')
class BookController {
    constructor(private bookService: BookService) {}

    @Get('all')
    findAll() {
        this.bookService.findAll()
            .then((books) => {
                console.log(books)
            })
            .catch(e => {
                throw new Error(e)
            })
    }

    @Get('create')
    createBooks() {
        this.bookService.createBook()
            .catch((e) => {
                throw new Error(e)
            })
    }
}

export { BookController }