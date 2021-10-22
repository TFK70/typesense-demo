import { Module }                 from '@nestjs/common'
import { TypeOrmModule }          from '@nestjs/typeorm'
import { GraphQLModule }          from '@nestjs/graphql'
import { TypesenseModule }        from '@atls/nestjs-typesense'
import { TypesenseTypeOrmModule } from '@atls/nestjs-typesense-typeorm'

import { BookService }            from '../services'
import { BookController }         from '../controllers'
import { Book }                   from '../entities'
import { BookResolver }           from '../resolvers'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [Book],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forFeature([Book]),
    TypesenseModule.register(),
    TypesenseTypeOrmModule.register(),
  ],
  exports: [TypeOrmModule],
  controllers: [BookController],
  providers: [BookService, Book, BookResolver],
})
export class BookModule {}
