"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function bootstrap() {
    // const app = await NestFactory.create(AppModule);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    app.setBaseViewsDir((0, path_1.join)(__dirname, 'views/pages')); // テンプレートファイルの場所
    app.setViewEngine('hbs'); // Handlebarsを使用する場合
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
