import { UsersService } from "./users.service";
import { Controller, Get, Post, Patch, Delete, Body, Query, Param, UsePipes, Put } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { CreateUserDto } from "../shared/create-user.dto";
import { UpdateUserDto } from "../shared/update-user.dto";
import { Prisma, User } from '@prisma/client';
import { BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private usersRepository: UsersRepository) {}

  @Get()
  async findActiveUsers(): Promise<User[]> {
    return this.usersRepository.findAll({where: {isDeleted: false}})
  }

  @Post('new')
  @UsePipes()
  async create(@Body() userDataForCreate: CreateUserDto): Promise<User>{

    // バリデーション
    const userDto = plainToClass(CreateUserDto, userDataForCreate);
    
    // バリデーションを実行
    const errors = await validate(userDto);
    
    // エラーがある場合は、BadRequestExceptionをスロー
    if (errors.length > 0) {
      // エラーメッセージを整形
      const formattedErrors = errors.map(error => {
        return {
          property: error.property,
          constraints: error.constraints,
        };
      });
      
      throw new BadRequestException({
        message: 'Validation failed',
        errors: formattedErrors
      });
    }


    //  OKの場合、処理を続行する
    //  NGの場合、エラー
    
    // パスワードを生成する
    const passwordBase = userDataForCreate.firstName;
    const password = await this.usersService.generateInitinalUserPassword(passwordBase, 5)

    console.log(password);

    // ユーザー情報をデータベースに作成する
     const newUser = this.usersRepository.create(userDataForCreate, password);
     console.log(newUser);
     
     return newUser;
  }
  
  @Patch('edit/:id')
  async update(
    @Param('id') id: string,
    @Body() userDateForUpdate: UpdateUserDto){

    // バリデーション
    //  OKの場合、ユーザー情報を更新
    //  NGの場合、エラー
    // データベースを更新
    const editUser = this.usersRepository.update(userDateForUpdate, parseInt(id));

    return editUser;
  }

  @Get(':id')
  async show(@Param('id') id: string){
    const showUser = this.usersRepository.show(parseInt(id));
    console.log(showUser);
    return showUser;
  }

  @Delete(':id')
  async delete(@Param('id') id: string){

    //　カラムuser.isDeleteをtrueにする
    try {
      return await this.usersRepository.delete(parseInt(id));
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