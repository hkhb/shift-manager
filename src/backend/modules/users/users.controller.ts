import { UsersService } from "./users.service";
import { Controller, Get, Post, Patch, Delete, Body, Query, Param, UsePipes } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { CreateUserDto } from "../shared/create-user.dto";
import { Prisma, User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private usersRepository: UsersRepository) {}

  @Get()
  async findActiveUsers(): Promise<User[]> {
    return this.usersService.findActiveUsers();
  }

  @Post('new')
  @UsePipes()
  async createUser(@Body() createUserData: CreateUserDto): Promise<User>{

    // バリデーション
    //  OKの場合、処理を続行する
    //  NGの場合、エラー
    
    // パスワードを生成する
    // ユーザー情報をデータベースに作成する

     const newUser = this.usersRepository.createUser(createUserData);
     console.log(newUser);
     
     return newUser;
  }
  
  @Patch('edit/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserData: CreateUserDto){

    // バリデーション
    //  OKの場合、ユーザー情報を更新
    //  NGの場合、エラー
    // データベースを更新
    const editUser = this.usersRepository.updateUser(updateUserData, parseInt(id));

    return editUser;
  }

  @Get(':id')
  async showUser(@Param('id') id: string){
    const showUser = this.usersRepository.showUser(parseInt(id));
    console.log(showUser);
    return showUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string){

    //　カラムuser.isDeleteをtrueにする
    try {
      return await this.usersRepository.deleteUser(parseInt(id));
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return {
          msg: "Record Not Found",
          statusCode: "404"
        };
      }
    }
  }
} 