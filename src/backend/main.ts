import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);

  app.setBaseViewsDir(join(__dirname, 'views/pages')); // テンプレートファイルの場所
  app.setViewEngine('hbs'); // Handlebarsを使用する場合

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
