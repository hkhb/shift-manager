import { User } from "@prisma/client";
import { UsersRepository } from "./users.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findActiveUsers(): Promise<User[]> {
    console.log("全て表示")
    return this.usersRepository.findAll({where: {isDeleted: false}})
  }
}