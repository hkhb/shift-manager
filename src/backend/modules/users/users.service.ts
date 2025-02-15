import { User } from "@prisma/client";
import { UsersRepository } from "./users.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async findActiveUsers(): Promise<User[]> {
    return this.userRepository.findAll({where: {isDeleted: false}})
  }
}