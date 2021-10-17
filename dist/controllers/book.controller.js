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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const services_1 = require("../services");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    findAll() {
        this.bookService
            .findAll()
            .then((books) => {
            console.log(books);
        })
            .catch((e) => {
            throw new Error(e);
        });
    }
    createBooks() {
        this.bookService.createBook().catch((e) => {
            throw new Error(e);
        });
    }
    initCollection() {
        this.bookService.initCollection().catch((e) => {
            throw new Error(e);
        });
    }
    async findExact(query) {
        return await this.bookService.findExact(query).catch((e) => {
            throw new Error(e);
        });
    }
};
__decorate([
    common_2.Get('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookController.prototype, "findAll", null);
__decorate([
    common_2.Get('create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookController.prototype, "createBooks", null);
__decorate([
    common_2.Get('init-collection'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookController.prototype, "initCollection", null);
__decorate([
    common_2.Get(':query'),
    __param(0, common_3.Param('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findExact", null);
BookController = __decorate([
    common_1.Controller('book'),
    __metadata("design:paramtypes", [services_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map