import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('user/index')
  getHello() {
    return { message: 'Hello world' }; // テンプレートに渡すデータ
    // return this.appService.getHello();
  }

  @Get('payment')
  @Render('payment/index')
  getPayment() {
    return { message: 'Hello Payment' }; // テンプレートに渡すデータ
    // return this.appService.getHello();
  }
}
