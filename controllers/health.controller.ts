import { Controller }     from '@nestjs/common'
import { Get }            from '@nestjs/common'

import { LogService } from '../services'

@Controller('health')
class HealthController {
    constructor(private logService: LogService) {}

    @Get()
    check(): string {
        return this.logService.invoke()
    }
}

export { HealthController }