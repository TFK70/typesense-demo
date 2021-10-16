import { TypesenseMetadataRegistry } from '@atls/nestjs-typesense';
import { Repository } from 'typeorm';
import { Client } from 'typesense';
import { Book } from '../entities';
export declare class BookService {
    private bookRepository;
    private typesenseMetadataRegistry;
    private client;
    booksSchemaTarget: new (...args: any[]) => {};
    typesense: Client;
    constructor(bookRepository: Repository<Book>, typesenseMetadataRegistry: TypesenseMetadataRegistry, client: Client);
    private initTarget;
    findAll(): Promise<Book[]>;
    createBook(): Promise<void>;
    initCollection(): Promise<void>;
    findExact(): Promise<void>;
}
