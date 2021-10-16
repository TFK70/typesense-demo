import { Module }                 from '@nestjs/common'
import { TypeOrmModule }          from '@nestjs/typeorm'
import { TypesenseModule }        from '@atls/nestjs-typesense'
import { TypesenseTypeOrmModule } from '@atls/nestjs-typesense-typeorm'

import { BookService }            from '../services'
import { BookController }         from '../controllers'
import { Book }                   from '../entities'

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
    TypeOrmModule.forFeature([Book]),
    TypesenseModule.register(),
    TypesenseTypeOrmModule.register(),
  ],
  exports: [TypeOrmModule],
  controllers: [BookController],
  providers: [BookService, Book],
})
export class BookModule {}
