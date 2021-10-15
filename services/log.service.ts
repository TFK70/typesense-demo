import { Injectable } from '@nestjs/common'

@Injectable()
class LogService {
    private readonly message: string = 'OK'

    invoke() {
        console.log(this.message)
        return this.message
    }
}

export { LogService }