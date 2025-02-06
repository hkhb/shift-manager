import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
// import { UsersService } from './users.service';
// import { UsersRepository } from './users.repository';

@Module({
  controllers: [UsersController],
  // providers: [UsersService, UsersRepository],
  providers: [],
  // exports: [UsersService], // 他のモジュールで使用可能にする
  exports: []
})
export class UsersModule {}