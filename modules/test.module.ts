import { Module }      from '@nestjs/common'

import { TestService } from './test.provider'

@Module({
  providers: [TestService],
})
export class TestModule {}
