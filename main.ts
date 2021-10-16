import { NestFactory } from '@nestjs/core'

import { MainModule }  from './modules'

const bootstrap = async () => {
  const app = await NestFactory.create(MainModule)

  app.listen(4000)
}

bootstrap()
