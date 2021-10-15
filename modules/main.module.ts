import { Module }          from '@nestjs/common'
import { TypeOrmModule }          from '@nestjs/typeorm'
import { TypesenseModule }        from '@atls/nestjs-typesense'

import { BookModule } from './book.module'
import { HealthController } from '../controllers'
import { LogService }  from '../services'

@Module({
    imports: [BookModule],
    controllers: [HealthController],
    providers: [LogService],
})

export class MainModule {}