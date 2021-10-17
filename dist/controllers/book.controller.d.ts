import { BookService } from '../services';
declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    findAll(): void;
    createBooks(): void;
    initCollection(): void;
    findExact(query: string): Promise<import("../entities").Book[]>;
}
export { BookController };
