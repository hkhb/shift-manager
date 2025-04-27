import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'
import { Prisma, Pay } from '@prisma/client';
import { CreatePayDto } from '../shared/create-pay.dto';
import { UpdatePayDto } from '../shared/update-pay.dto';

@Injectable()
export class PaysRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<Pay | null> {
    return this.prisma.pay.findUnique({
      where: { id }
    })
  }

  // pay情報の作成
  // create
  // 引数:userId, params(formの値)
  // 返り値:作成したデータ
  // 

  // async create(param:CreatePayDto, id: number):Promise<Pay>{
  //   return await  this.prisma.pay.create({
  //     data:{
  //       fixedSalary: param.fixedSalary,
  //       hourWage: param.hourWage,
  //       overtimePay: param.overtimePay
  //     }
  //   }
  //   )
  // }

  async update(param:UpdatePayDto, id: number):Promise<Pay>{
    return await  this.prisma.pay.update({
      where:{userId: id},
      data:{
        fixedSalary: param.fixedSalary,
        hourWage: param.hourWage,
        overtimePay: param.overtimePay
      }
    }
    )
  }
}