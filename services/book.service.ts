
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from '../entities';

@Injectable()
export class BookService {
    constructor(
        @Inject('BOOK_REPOSITORY')
        private bookRepository: Repository<Book>,
    ) {}

    async findAll(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    async createBook() {
        const book = this.bookRepository.create()
        book.name = 'Kirill'
        book.author = 'Samoylov'
        await this.bookRepository.save(book)
    }
}
