import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // フロントエンドのオリジン
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Cookie使用時に必要
  });
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,          // DTOに定義されていないプロパティを削除
    forbidNonWhitelisted: true, // DTOに定義されていないプロパティがあるとエラー
    transform: true,          // DTOの型に自動変換
  }));

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
