import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'
import { Prisma, User } from '@prisma/client';
// import { CreateUserType } from './users.controller';
import { CreateUserDto } from '../shared/create-user.dto';
import { UpdateUserDto } from '../shared/update-user.dto';

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

  async create(params: CreateUserDto, password: string): Promise<User>{
    return await this.prisma.user.create({
      data: {
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        age: params.age,
        gender: params.gender,
        address: params.address,
        phoneNumber: params.phoneNumber,
        password: password,
        isInitinalPassword: true
      }
    })
  }

  async update(params: UpdateUserDto, id: number):Promise<User | null>{

    return await this.prisma.user.update({
      where:{
        id: id
      },
      data: {
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        age: params.age,
        gender: params.gender,
        address: params.address,
        phoneNumber: params.phoneNumber,
        password: params.password,
        isInitinalPassword: false
      }
    })
  }

  async show(id: number):Promise<User | null>{

    return await this.prisma.user.findUnique({
      where: {id: id}
    })
  }

  async delete(id: number):Promise<User | null>{
    return await this.prisma.user.update({
      where: {id: id},
      data: {
        isDeleted: true 
      }
    })
  }
}