"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksSchema = void 0;
const booksSchema = {
    name: 'books',
    defaultSortingField: 'name',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'author', type: 'string' },
    ],
};
exports.booksSchema = booksSchema;
//# sourceMappingURL=books.schema.js.map