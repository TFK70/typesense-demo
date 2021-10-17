"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const nestjs_typesense_1 = require("@atls/nestjs-typesense");
const services_1 = require("../services");
const controllers_1 = require("../controllers");
const entities_1 = require("../entities");
let BookModule = class BookModule {
};
BookModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: '0.0.0.0',
                port: 5432,
                username: 'user',
                password: 'password',
                database: 'db',
                entities: [entities_1.Book],
                synchronize: true,
            }),
            graphql_1.GraphQLModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([entities_1.Book]),
            nestjs_typesense_1.TypesenseModule.register(),
        ],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [controllers_1.BookController],
        providers: [services_1.BookService, entities_1.Book],
    })
], BookModule);
exports.BookModule = BookModule;
//# sourceMappingURL=book.module.js.map