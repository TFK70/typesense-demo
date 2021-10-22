import { Injectable } from '@nestjs/common'

@Injectable()
class LogService {
  private readonly message: string = 'OK'

  invoke() {
    // eslint-disable-next-line no-console
    console.log(this.message)
    return this.message
  }
}

export { LogService }
