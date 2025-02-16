import { User } from "@prisma/client";
import { UsersService } from "./users.service";
import { Controller, Get, Post, Patch, Delete, Body, Query } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

export type CreateUserType = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  address: string;
  phoneNumber: number;
  password: string;
}

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private usersRepository: UsersRepository) {}

  @Get()
  async findActiveUsers(): Promise<User[]> {
    return this.usersService.findActiveUsers();
  }

  @Post('new')
  async createUser(@Body() createUserData: CreateUserType): Promise<User>{

    // バリデーション
    //  OKの場合、処理を続行する
    //  NGの場合、エラー
    
    // パスワードを生成する
    // ユーザー情報をデータベースに作成する

     const newUser = this.usersRepository.createUser(createUserData);
     return newUser;
  }
  
  @Patch('edit/:id')
  async updateUser(@Query('id') id: number){

    // バリデーション
    //  OKの場合、ユーザー情報を更新
    //  NGの場合、エラー
    // データベースを更新

    return "update";
  }

  @Get(':id')
  async showUser(@Query('id') id: number){

    // 同じidのuserとそれに紐づくpayの情報をデータベースから取得

    return "show";
  }

  @Delete(':id')
  async deleteUser(@Query('id') id: number){

    //　カラムuser.isDeleteをtrueにする

    return "delete";
  }
}