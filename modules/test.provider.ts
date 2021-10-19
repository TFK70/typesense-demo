import { Injectable }   from '@nestjs/common'
import { OnModuleInit } from '@nestjs/common'
import { Connection }   from 'typeorm'

@Injectable()
export class TestService implements OnModuleInit {
  constructor(private connection: Connection) {}

  onModuleInit(): any {
    class Example {
      constructor(connection) {
        console.log(connection)
      }
    }

    new Example(this.connection)
  }
}
