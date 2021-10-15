"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const modules_1 = require("./modules");
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(modules_1.MainModule);
    app.listen(3001);
};
bootstrap();
//# sourceMappingURL=main.js.map