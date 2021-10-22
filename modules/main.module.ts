import { Module }           from '@nestjs/common'

import { BookModule }       from './book.module'
import { HealthController } from '../controllers'
import { LogService }       from '../services'

@Module({
  imports: [BookModule],
  controllers: [HealthController],
  providers: [LogService],
})
export class MainModule {}
