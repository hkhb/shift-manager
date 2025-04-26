import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'
import { Prisma, Pay } from '@prisma/client';
import { CreateUserDto } from '../shared/create-user.dto';
import { UpdateUserDto } from '../shared/update-user.dto';

@Injectable()
export class PaysRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<Pay | null> {
    return this.prisma.pay.findUnique({
      where: { id }
    })
  }
}