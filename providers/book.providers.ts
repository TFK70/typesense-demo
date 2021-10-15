
import { Connection } from 'typeorm';
import { Book } from '../entities';

export const bookProviders = [
    {
        provide: 'BOOK_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Book),
        inject: ['DATABASE_CONNECTION'],
    },
];
