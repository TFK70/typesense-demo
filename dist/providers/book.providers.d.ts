import { Connection } from 'typeorm';
import { Book } from '../entities';
export declare const bookProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Book>;
    inject: string[];
}[];
