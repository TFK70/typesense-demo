"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_typesense_1 = require("@atls/nestjs-typesense");
const typeorm_2 = require("typeorm");
const typesense_1 = require("typesense");
const entities_1 = require("../entities");
const schemas_1 = require("../schemas");
let BookService = class BookService {
    constructor(bookRepository, typesenseMetadataRegistry, client) {
        this.bookRepository = bookRepository;
        this.typesenseMetadataRegistry = typesenseMetadataRegistry;
        this.client = client;
        this.initTarget();
        this.typesense = client;
        typesenseMetadataRegistry.addSchema(this.booksSchemaTarget, schemas_1.booksSchema);
    }
    initTarget() {
        class Target {
            constructor(name, author) {
                this.name = name;
                this.author = author;
            }
        }
        this.booksSchemaTarget = Target;
    }
    async findAll() {
        return this.bookRepository.find();
    }
    async createBook() {
        const book = this.bookRepository.create();
        book.name = 'Kirill';
        book.author = 'Samoylov';
        await this.bookRepository.save(book);
    }
    async initCollection() {
        const names = ['alpha', 'beta', 'omega', 'shadow'];
        const authors = ['ahpla', 'ateb', 'agemo', 'raze'];
        const books = names.reduce((result, name, idx) => [...result, { name, author: authors[idx] }], []);
        books.forEach((book) => {
            this.typesense.collections('books').documents().create(book);
        });
    }
    async findExact(query) {
        const searchParams = {
            q: query,
            query_by: 'name',
        };
        return this.typesense
            .collections('books')
            .documents()
            .search(searchParams)
            .then((result) => {
            var _a;
            console.log('results', result);
            return (_a = result === null || result === void 0 ? void 0 : result.hits) === null || _a === void 0 ? void 0 : _a.map((hit) => {
                console.log(hit.document);
                return hit.document;
            });
        });
    }
};
BookService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(entities_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        nestjs_typesense_1.TypesenseMetadataRegistry, typeof (_a = typeof typesense_1.Client !== "undefined" && typesense_1.Client) === "function" ? _a : Object])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map