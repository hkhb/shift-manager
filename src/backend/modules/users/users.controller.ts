import { User } from "@prisma/client";
import { UsersService } from "./users.service";
import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { CreateUserType } from "../../../shared/type/create-user.type"

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private usersRepository: UsersRepository) {}

  @Get()
  async findActiveUsers(): Promise<User[]> {
    return this.usersService.findActiveUsers();
  }

  @Post()
  async createUser(@Body() createUserType: CreateUserType): Promise<User>{
     const newUser = this.usersRepository.createUser(createUserType);
     return newUser;
  }
}