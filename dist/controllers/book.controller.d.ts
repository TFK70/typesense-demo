import { BookService } from '../services';
declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    findAll(): void;
    createBooks(): void;
}
export { BookController };
