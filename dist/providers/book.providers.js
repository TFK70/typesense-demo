"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookProviders = void 0;
const entities_1 = require("../entities");
exports.bookProviders = [
    {
        provide: 'BOOK_REPOSITORY',
        useFactory: (connection) => connection.getRepository(entities_1.Book),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=book.providers.js.map