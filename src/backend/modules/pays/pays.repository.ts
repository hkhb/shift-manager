import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from '../shared/create-user.dto';
import { UpdateUserDto } from '../shared/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<User | null> {
    return this.prisma.pay.findUnique({
      where: { id }
    })
  }
}