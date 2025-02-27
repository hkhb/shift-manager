import { UsersService } from "./users.service";
import { Controller, Get, Post, Patch, Delete, Body, Query, Param, UsePipes, Put, Search } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { CreateUserDto } from "../shared/create-user.dto";
import { UpdateUserDto } from "../shared/update-user.dto";
import { Prisma, User } from '@prisma/client';

const PASSWORD_BYTE = 5;
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private usersRepository: UsersRepository) {}

  @Get()
  async findActiveUsers(): Promise<User[]> {
    return this.usersRepository.findAll({where: {isDeleted: false}})
  }
  
  @Get('search')
  async findUsersByName(@Query('searchName') searchName: string): Promise<User[]> {
    return this.usersRepository.findAll(
      {
        where: {
          isDeleted: false,
          OR: [
            { firstName: { contains: searchName } },
            { lastName: { contains: searchName } }
          ]
        }
      })
  }

  @Post('new')
  @UsePipes()
  async create(@Body() userDataForCreate: CreateUserDto): Promise<User>{

    // パスワードを生成する
    const passwordBase = userDataForCreate.firstName;
    const password = await this.usersService.generateInitialUserPassword(passwordBase, PASSWORD_BYTE)

    // ユーザー情報をデータベースに作成する
     const newUser = this.usersRepository.create(userDataForCreate, password);
     return newUser;
  }
  
  @Patch('edit/:id')
  async update(
    @Param('id') id: string,
    @Body() userDateForUpdate: UpdateUserDto){
    const editUser = this.usersRepository.update(userDateForUpdate, parseInt(id));

    return editUser;
  }

  @Get(':id')
  async show(@Param('id') id: string){
    const showUser = await this.usersRepository.findById(parseInt(id));
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