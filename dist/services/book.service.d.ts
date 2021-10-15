import { Repository } from 'typeorm';
import { Book } from '../entities';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<Book>);
    findAll(): Promise<Book[]>;
    createBook(): Promise<void>;
}
