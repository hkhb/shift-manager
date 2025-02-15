import { User } from "@prisma/client";
import { UsersService } from "./users.service";
import { Controller, Get } from "@nestjs/common";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findActiveUsers(): Promise<User[]> {
    return this.usersService.findActiveUsers();
  }
}