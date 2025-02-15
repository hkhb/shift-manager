import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // 全ユーザーを取得（ページネーション付き）
  async findAll({ skip, take, where, orderBy }: {
    skip?: number;
    take?: number;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    return this.prisma.user.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }
}