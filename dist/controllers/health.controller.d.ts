import { LogService } from '../services';
declare class HealthController {
    private logService;
    constructor(logService: LogService);
    check(): string;
}
export { HealthController };
