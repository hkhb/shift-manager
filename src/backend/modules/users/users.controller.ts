import { User } from "@prisma/client";
import { UsersService } from "./users.service";
import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

export type CreateUserType = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  address: string;
  phoneNumber: number;
}

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